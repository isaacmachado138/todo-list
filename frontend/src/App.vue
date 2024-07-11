<template>
  <div id="app">
    <NavbarPage />

    <router-view/> <!--renderizando componente correspondente a rota atual -->

    <FooterPage />

  </div>
</template>

<script>
import NavbarPage from './components/Structure/NavbarPage.vue'
import FooterPage from './components/Structure/FooterPage.vue'

export default {
  name: 'App',
  components: {
    NavbarPage,
    FooterPage
  }
}
</script>

<style>
.btn-purple {
  background-color: #715bd4 !important;
  color: white !important;
}

</style>
