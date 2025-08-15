import { createStore } from 'vuex'

export default createStore({
  state: {
    clients: []
  },
  mutations: {
    addClient(state, client) {
      client.id = Date.now()
      state.clients.push(client)
    },
    updateClient(state, updatedClient) {
      const index = state.clients.findIndex(c => c.id === updatedClient.id)
      if (index !== -1) {
        state.clients[index] = updatedClient
      }
    },
    deleteClient(state, id) {
      state.clients = state.clients.filter(c => c.id !== id)
    }
  },
  actions: {
    addClient({ commit }, cliente) {
      commit('addClient', cliente)
    },
    updateClient({ commit }, cliente) {
      commit('updateClient', cliente)
    },
    deleteClient({ commit }, id) {
      commit('deleteClient', id)
    }
  },
  getters: {
    getClients: state => state.clients,
    getClientById: state => id => state.clients.find(c => c.id === parseInt(id))
  }
})
