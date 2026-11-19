<script setup>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<template>
  <b-container-fluid>
    <NavBar></NavBar>
    <router-view />
  </b-container-fluid>
</template>

<style scoped>

</style>
