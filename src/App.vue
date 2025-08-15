<template>
  <v-app>
    <v-layout class="bg-grey-lighten-3 min-height-100vh">
      <!-- Barra superior -->
      <v-app-bar color="teal-darken-4" flat>
        <template v-slot:image>
          <v-img
            src="./public/potada.png"
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

         <v-app-bar-title href="/">Ejercicio 1: CRUD en Vue 3 con Simulación de Persistencia vía Vuex</v-app-bar-title>
      </v-app-bar>

      <!-- Contenido principal -->
      <v-main class="bg-grey-lighten-3">
        <v-container fluid>
          <v-row dense>
            <router-view />
          </v-row>
        </v-container>
      </v-main>

      <!-- Pie de página -->
      <v-footer app color="teal-darken-4" dark>
        <v-col class="text-center">
          &copy; {{ new Date().getFullYear() }} Ejercicio 1: CRUD en Vue 3 con Simulación de Persistencia vía Vuex
        </v-col>
        <v-col class="text-center">
          &copy; Desarrollado por Gregorio San Martin Crisostomo
        </v-col>
      </v-footer>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
/* Opcional: estilos globales */
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
