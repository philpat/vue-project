import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    numberofitems: null
  },
  mutations: {
    ADD_TO_CART: (state, item) => {
      state.cart.push(item)
    },
    NUM_OF_ITEM: (state, item) => {
      state.numberofitems(item)
    },
    increment (state, id) {
      const item = state.cart.map(i => i.id === id)
      item.quantity++
    },
    decrement (state, id) {
      const item = state.cart.map(i => i.id === id)
      item.quantity--
    },
    pushProductTocart (state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    }
  },
  actions: {
    addToCart ({ commit }, item) {
      commit('ADD_TO_CART', item)
    },
    changenumberofunits ({ commit }, item) {
      commit('NUM_OF_ITEM', item)
    }
  },
  modules: {
  },
  getters: {
    cartCount: state => state.cart.length,
    cartItems: state => state.cart
  }
})
