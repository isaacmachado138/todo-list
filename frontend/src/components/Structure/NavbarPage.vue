<template>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    
    <a class="navbar-brand mr-auto" href="/" >
      
      <img src="/logo.png" alt="Lista de Tarefas" width="50" height="50">
      
    </a>
    
    <div class="navbar-nav mx-auto"> <!-- Alinhar os itens de navegação ao centro -->
      
      <router-link class="nav-link" to="/" exact>Home</router-link> 
            
    </div>

    
  </nav>
  
</template>

<script>

export default {
  name: 'PageNavbar',
}
</script>


<style>
.navbar{
  margin-bottom: 10px;
}
</style>
