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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 
.btn-purple {
  background-color: #715bd4 !important;
  color: white !important;
}

.card {
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f9fa !important;
  border-bottom: 1px solid #715bd4 !important;
}

.card-body {
  padding: 2rem;
}

</style>
