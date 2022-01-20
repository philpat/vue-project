<template>
<div class="nav">
    <router-link to="/homebtn" class="btn">Home</router-link>

    <router-link to="carticon" class="cart-icon">
      {{ $store.getters.cartCount}}
      <i class="fas fa-shopping-cart fa-3x"/>
    </router-link>
  </div>
</template>
