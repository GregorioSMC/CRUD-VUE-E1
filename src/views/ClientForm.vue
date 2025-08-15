<template>
  <v-container class="py-5">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="2" class="pa-4">
          <v-card-title class="text-h6 text-teal-darken-4">
            Registro de Cliente
          </v-card-title>

          <v-form ref="form">
            <v-row dense>
              <!-- Nombre -->
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="cliente.nombre"
                  label="Nombre"
                  prepend-icon="mdi-account"
                  :rules="nombreRules"
                  required
                ></v-text-field>
              </v-col>

              <!-- Apellido Paterno -->
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="cliente.apellidoPaterno"
                  label="Apellido Paterno"
                  prepend-icon="mdi-account"
                  :rules="apellidoPaternoRules"
                  required
                ></v-text-field>
              </v-col>

              <!-- Apellido Materno -->
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="cliente.apellidoMaterno"
                  label="Apellido Materno"
                  prepend-icon="mdi-account"
                  :rules="apellidoMaternoRules"
                  required
                ></v-text-field>
              </v-col>

              <!-- Correo electrónico -->
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="cliente.correo"
                  label="Correo electrónico"
                  prepend-icon="mdi-email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>

              <!-- Teléfono -->
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="cliente.telefono"
                  label="Teléfono"
                  prepend-icon="mdi-phone"
                  :rules="telefonoRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Botones -->
            <v-row justify="end" class="mt-4">
              <v-btn color="green" class="me-2" @click="guardar">
                Guardar
              </v-btn>
              <v-btn color="red" @click="$router.push('/')">          
                Cancelar
              </v-btn>
            </v-row>

            <!-- Mensaje de error -->
            <v-alert
              v-if="error"
              type="error"
              dense
              text
              class="mt-4"
            >
              Por favor completa todos los campos correctamente.
            </v-alert>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      error: false,
      cliente: {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        correo: '',
        telefono: ''
      },
      nombreRules: [
        v => !!v || 'El nombre es obligatorio'
      ],
      apellidoPaternoRules: [
        v => !!v || 'El Apellido Paterno es obligatorio'
      ],
       apellidoMaternoRules: [
        v => !!v || 'El Apellido Materno es obligatorio'
      ],
      emailRules: [
        v => !!v || 'El correo es obligatorio',
        v => /.+@.+\..+/.test(v) || 'Formato de correo inválido'
      ],
      telefonoRules: [
        v => !!v || 'El teléfono es obligatorio',
        v => /^\d{10}$/.test(v) || 'Debe tener 10 dígitos numéricos'
      ]
    }
  },
  computed: {
    ...mapGetters(['getClientById'])
  },
  mounted() {
    if (this.id) {
      const clienteExistente = this.getClientById(this.id)
      if (clienteExistente) {
        this.cliente = { ...clienteExistente }
      }
    }
  },
  methods: {
    ...mapActions(['addClient', 'updateClient']),
    
    camposValidos() {
      const { nombre, apellidoPaterno, apellidoMaterno, correo, telefono } = this.cliente
      const nombreValido = nombre.trim() !== ''
      const apValido = apellidoPaterno.trim() !== ''
      const amValido = apellidoMaterno.trim() !== ''
      const correoValido = /.+@.+\..+/.test(correo)
      const telefonoValido = /^\d{10}$/.test(telefono)
      return nombreValido && correoValido && telefonoValido && apValido && amValido
    },

    guardar() {
      this.error = false
      const formValido = this.$refs.form.validate()
      const camposOk = this.camposValidos()

      if (formValido && camposOk) {
        if (this.id) {
          this.updateClient(this.cliente)
        } else {
          this.addClient(this.cliente)
        }
        this.$router.push('/')
      } else {
        this.error = true
      }
    }
  }
}
</script>