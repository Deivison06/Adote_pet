<template>
  <div class="container">
    <h2 class="my-4 text-center">Relatório de Adoções</h2>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4" v-for="adoption in adoptions" :key="adoption.id">
        <div class="card h-100 shadow-sm rounded">
          <div class="card-body">
            <h5 class="card-title font-weight-bold mb-3">Pet: {{ adoption.pet.nome }}</h5>
            <p class="card-text">Adotante: {{ adoption.email }}</p>
            <p class="card-text">Valor: R$ {{ adoption.valor }}</p>
          </div>
          <img
            :src="adoption.pet.foto"
            class="card-img-bottom pet-img rounded-top"
            alt="Pet Image"
            style="object-fit: cover; object-position: top;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      adoptions: [],
    };
  },
  mounted() {
    this.fetchAdoptions();
  },
  methods: {
    fetchAdoptions() {
      axios
        .get("http://127.0.0.1:8000/api/adocoes")
        .then((response) => {
          this.adoptions = response.data;
        })
        .catch((error) => {
          console.error("Houve um erro ao obter as adoções!", error);
        });
    },
  },
};
</script>

<style scoped>
.pet-img {
  width: 100%;
  height: 200px; /* Defina a altura desejada para as imagens */
  object-fit: cover; /* Garante que a imagem cubra todo o espaço da div */
}
</style>
