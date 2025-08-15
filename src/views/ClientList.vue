<template>
  <v-container>
    

    <!-- Tabla que muestra los registros simulados con VUEX -->
  <div>
 <v-card class="pa-4">
  
  <v-btn color="green" @click="$router.push('/AltaCliente')">(+) Agregar Cliente</v-btn>

  <v-card-title class="text-h6 font-weight-bold">Clientes</v-card-title>

    <v-table class="elevation-2 rounded" density="comfortable">
      <thead class="bg-grey-lighten-3 text-grey-darken-4">
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Apellido Paterno</th>
          <th class="text-left">Apellido Materno</th>
          <th class="text-left">Correo</th>
          <th class="text-left">Teléfono</th>
          <th class="text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cliente in clientesPaginados"
          :key="cliente.id"
          class="hover:bg-grey-lighten-4"
        >
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.apellidoPaterno }}</td>
          <td>{{ cliente.apellidoMaterno }}</td>
          <td>{{ cliente.correo }}</td>
          <td>{{ cliente.telefono }}</td>
          <td>
            <v-btn
              color="primary"
              size="small"
              class="me-2"
              @click="$router.push(`/Editar/${cliente.id}`)"
            >
              Editar
            </v-btn>
            <v-btn
              color="error"
              size="small"
              @click="confirmarEliminacion(cliente)"
            >
              Eliminar
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <v-pagination
      v-model="paginaActual"
      :length="totalPaginas"
      class="mt-4"
      color="primary"
    ></v-pagination>
  </v-card>

  </div>


    <!-- Diálogo de confirmación -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">¿Eliminar cliente?</v-card-title>
        <v-card-text>
          ¿Estás seguro de que deseas eliminar el registro seleccionado, Esta acción no se puede deshacer.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="red" text @click="eliminarConfirmado">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      clienteSeleccionado: null,
      paginaActual: 1,
      elementosPorPagina: 5
    }
  },
  computed: {
    ...mapGetters(['getClients']),
    clientes() {
      return this.getClients
    },
  
    totalPaginas() {
      return Math.ceil(this.clientes.length / this.elementosPorPagina);
    },
    clientesPaginados() {
      const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
      const fin = inicio + this.elementosPorPagina;
      return this.clientes.slice(inicio, fin);
    },
  },
  methods: {
    ...mapActions(['deleteClient']),
    confirmarEliminacion(cliente) {
      this.clienteSeleccionado = cliente
      this.dialog = true
    },
    eliminarConfirmado() {
      if (this.clienteSeleccionado) {
        this.deleteClient(this.clienteSeleccionado.id)
        this.dialog = false
        this.clienteSeleccionado = null
      }
    }
  }
}
</script>