<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <router-link class="navbar-brand" to="/">Pet Adoption</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/adoption-list">Relatório de Adoções</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Conteúdo -->
      <div class="container mt-4">
        <router-view></router-view>
      </div>
  
      <!-- Rodapé -->
      <footer class="footer mt-auto py-3 bg-light">
        <div class="container text-center">
          <span class="text-muted">© 2024 Pet Adoption. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainLayout'
  };
  </script>
  
  <style>
  /* Estilos personalizados aqui, se necessário */
  </style>
  