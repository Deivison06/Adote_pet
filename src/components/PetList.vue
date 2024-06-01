<template>
  <div class="container">
    <h2 class="my-4 text-center">Lista de Pets</h2>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" v-for="pet in pets" :key="pet.id">
        <div class="card h-100">
          <img :src="pet.foto" class="card-img-top pet-img" alt="Pet Image" style="object-fit: cover; object-position: top;">
          <div class="card-body">
            <h5 class="card-title">{{ pet.nome }}</h5>
            <p class="card-text">{{ pet.historia }}</p>
          </div>
          <div class="card-footer text-center">
            <button class="btn btn-primary" @click="adotarPet(pet.id)">Adotar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pets: []
    };
  },
  mounted() {
    this.fetchPets();
  },
  methods: {
    fetchPets() {
      axios.get('http://127.0.0.1:8000/api/pets')
        .then(response => {
          this.pets = response.data;
        })
        .catch(error => {
          console.error("Houve um erro ao obter os pets!", error);
        });
    },
    adotarPet(petId) {
      // Definir o ID do pet no objeto de adoção
      this.$router.push({ name: 'AdoptionForm', query: { pet_id: petId } });
    }
  }
};
</script>

<style scoped>
.pet-img {
  width: 100%;
  height: 200px; /* Defina a altura desejada para as imagens */
  object-fit: cover; /* Garante que a imagem cubra todo o espaço da div */
}
</style>
