<template>
    <h1>hi, welcome to cart</h1>
    <div class="cart-icon">
        <h3>all products</h3>
        <div class="cart-container">
            <div class="cart-item" v-for="item in $store.state.cart" :key="item.id">
                <img :src="require(`@/assets/${item.image}`)" alt="">
                <h3>{{item.name}}</h3>
                <div class="num">
                  <!-- <button class="plus" @click="changenumberofunits('plus', product)">+</button>
                  <button class="reset" >{{item.quantity}}</button>
                  <button class="minus" @click="changenumberofunits('minus', product)">-</button> -->
                  <button class="plus" @click="changenumberofunits(item.id)">+</button>
                  <button class="reset" >{{item.quantity}}</button>
                  <button class="minus" @click="changenumberofunits(item.id)">-</button>
                </div>
                <p>total cost: ${{price}}</p>
            </div>
            <div class="cart-total">
                <p>cart total : # ${{total}}</p>
            </div>
            <div class="cart-email">
                <input type="email">
                <div class="checkbtn">
                    <a href="">checkout</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import data from '@/data.js'
// let count = 0
// const cart = []
const quantity = 1
export default {
  data () {
    return {
      products: data.products,
      price: this.price,
      total: 0
    }
  },
  computed: {
    destination () {
      return data.products.find(
        product => (product.id = this.productId)
      )
    },
    cartItems () {
      return this.$store.state.cartItems
    },
    totalPrice () {
      let price = 0
      this.$store.state.cartItems.map(el => {
        price += el[quantity] * el[price]
      })
      return price
    },
    calcTotal () {
      let total = 0
      this.$store.state.cartItems.map(el => {
        total += this.price * el[quantity]
      })
      return total
    }
  },
  methods: {
    changenumberofunits (id) {
      console.log(id)
      // this.$store.commit('increment', id)
    }
  }
  // methods: {
  //   changenumberofunits (action, product) {
  //     console.log('bok', cart)
  //     cart.map((item) => {
  //       let numberofunits = item.numberofunits
  //       console.log(product.id)
  //       if (product.id === item) {
  //         if (action === 'minus' && numberofunits > 1) {
  //           console.log('com')
  //           numberofunits--
  //         } else if (action === 'plus' && numberofunits < 1) {
  //           console.log('gyou')
  //           numberofunits++
  //         }
  //       }
  //       return {
  //         item,
  //         numberofunits
  //       }
  //     })
  //   }
  // }
  // this.$store.state.commit('increment', id)
  // methods: {
  // changenumberofunits (item) {
  //   this.$store.dispatch('addToCart', item)
  // },
  // removeFromCart (item) {
  //   this.$store.dispatch('removeFromCart', item)
  // },
  // add (id) {
  //   this.$store.commit('increment', id)
  // }
  // methods: {
  //   changenumberofunits (action, product) {
  //     console.log('Clicked')
  //     cart.map((item) => {
  //       let numberofunits = item.quantity
  //       if (item.product === product) {
  //         if (action === 'minus' && numberofunits > 1) {
  //           numberofunits--
  //         } else if (action === 'plus' && numberofunits < item.stock) {
  //           numberofunits++
  //         }
  //       }
  //       return {
  //         item,
  //         numberofunits
  //       }
  //     })
  //   }
  // methods: {
  //   changenumberofunits (item) {
  //     this.$store.dispatch('addToCart', item)
  //   },
  //   removeFromCart (item) {
  //     this.$store.dispatch('removeFromCart', item)
  //   }
  // changenumberofunits (item, mode) {
  //   const result = this.cartItems.find((res) => {
  //     if (res.item === item) {
  //       return res.item
  //     }
  //   })

  //   if (result) {
  //     for (let i = 0; i < this.cartItems.length; i++) {
  //       if (this.cartItems[i].item === item.id) {
  //         const newItem = {
  //           ...this.cartItems[i],
  //           count: mode === 'INCRE' ? this.cartItems[i].count + 1 : this.cartItems[i].count - 1
  //         }
  //         console.log('plus')
  //         this.$set(this.cartItem, i, newItem)
  //       }
  //     }
  //   }
  // },
  // removeFromCart (item) {
  //   const result = this.cartItems.find((res) => {
  //     if (res.item.id === item.id) {
  //       return res.item.id
  //     }
  //   })
  //   if (result) {
  //     for (let i = this.cartItems.length - 1; i >= 0; i--) {
  //       if (this.cartItems[i].item.id === item.id && this.cartItems[i].count > 0) {
  //         const newItem = {
  //           ...this.cartItems[i],
  //           count: this.cartItems[i].count - 1
  //         }
  //         this.$set(this.cartItems, i, newItem)
  //       }
  //     }
  //   }
  // }
  // }
  // let result = this.cartItems.find((res) => {
  //       if (res.item.id == item.id) {
  //         return res.item.id;
  //       }
  //     }
}
</script>
