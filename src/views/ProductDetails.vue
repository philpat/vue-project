<template>
    <div class="view-content">
      <img :src="require(`@/assets/${destination.image}`)" alt="">
      <div class="view-text">
        <h3>{{destination.name}}</h3>
        <p class="cat">Category: Mountain bike</p>
        <p>Sonder’s Evol GX Eagle is designed and tested in the UK,
          and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s
          balanced the bike’s performance to suit everything from trail centres to enduro with its modern long,
          slack and low geometry. Sonder sells most of its bikes direct,
          so prices are reasonable and the six builds available are all well-specced. </p>
        <p class="price">&#8358; {{destination.price}}</p>
        <!-- <a href="" class="cart">add to cart</a> -->
        <button @click="addToCart(destination.id)" class="cart">add to cart</button>
      </div>
    </div>
</template>
<script>
import data from '@/data.js'
// const cart = []
export default {
  data () {
    return {
      productId: this.$route.params.id,
      product: []
    }
  },
  computed: {
    destination () {
      return data.products.find(
        product => (product.id = this.productId)
      )
    }
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('addToCart', product)
      console.log('clicked')
    }
    // addToCart (id) {
    //   const item = this.products.findIndex((value) => value.id === id)
    //   const product = this.products[item]
    //   cart.push(product)
    //   console.log(this.product)
    // }
  },
  mounted () {
    console.log(data.products)
  }
}
</script>
