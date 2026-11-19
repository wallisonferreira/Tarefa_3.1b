<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <b-container-fluid>
    <NavBar></NavBar>
    <router-view />
  </b-container-fluid>
</template>
