import { createRouter, createWebHistory } from 'vue-router'
import ClientList from '../views/ClientList.vue'
import ClientForm from '../views/ClientForm.vue'

const routes = [
  { path: '/', name: 'Clientes', component: ClientList },
  { path: '/AltaCliente', name: 'NuevoCliente', component: ClientForm },
  { path: '/Editar/:id', name: 'EditarCliente', component: ClientForm, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
