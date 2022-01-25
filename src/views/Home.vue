<template>
<main>
  <h1>all products</h1>
      <div class="content">
        <div class="content-item" v-for="product in products"
      :key="product.id">
      <figure>
        <img :src="require(`@/assets/${product.image}`)" alt="">
      </figure>
        <div class="text">
          <h3>{{product.name}}</h3>
          <p>price: &#8358;{{product.price}}</p>
          <div class="btn1">
            <router-link :to="{name: 'ProductDetails', params: {id: product.id}}">view</router-link>
            <button @click="addToCart(product)">Add to cart</button>
          </div>
        </div>
      </div>
      </div>
</main>
</template>

<script>
import data from '@/data.js'
// const cart = []
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      products: data.products
    }
  },
  methods: {
    // addToCart (id) {
    //   const item = this.products.findIndex((value) => value.id === id)
    //   const product = this.products[item]
    //   cart.push(product)
    //   console.log(cart)
    // },
    addToCart (product) {
      this.$store.dispatch('addToCart', product)
    }
    // addToCart (context, product) {
    //   if (product > 0) {
    //     const cartItem = context.state.cart.find(item => item.id === product.id)
    //     if (!cartItem) {
    //       context.commit('pushProductTocart', product)
    //     } else {
    //       context.commit('incrementItemQuantity', cartItem)
    //     }
    //     context.commit('decrementProductInventory', product)
    //   }
    // }
  }
}
</script>
