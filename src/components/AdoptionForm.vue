<template>
  <div class="container">
    <h2 class="my-4 text-center">Formulário de Adoção</h2>
    <form @submit.prevent="adoptPet" class="row g-3">
      <div class="col-md-6">
        <label for="email" class="form-label">Seu Email</label>
        <input type="email" class="form-control" v-model="adoption.email" required />
        <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
      </div>
      <div class="col-md-6">
        <label for="valor" class="form-label">Valor</label>
        <input type="number" class="form-control" v-model="adoption.valor" required />
        <div v-if="errors.valor" class="text-danger">{{ errors.valor }}</div> <!-- Corrigido errors.email para errors.valor -->
      </div>
      <div class="col-md-6">
        <label for="pet_id" class="form-label">ID do Pet</label>
        <input type="number" class="form-control" v-model="adoption.pet_id" required readonly />
        <div v-if="errors.pet_id" class="text-danger">{{ errors.pet_id }}</div> <!-- Corrigido errors.email para errors.pet_id -->
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Adotar</button>
      </div>
    </form>
    <!-- Exibir mensagens de erro -->
    <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      adoption: {
        email: "",
        valor: "",
        pet_id: "",
      },
      errors: {},
    };
  },
  mounted() {
    // Verifique se há um ID do pet na query e preencha o campo de ID do pet
    if (this.$route.query.pet_id) {
      this.adoption.pet_id = this.$route.query.pet_id;
    }
  },
  methods: {
    adoptPet() {
      axios
        .post("http://127.0.0.1:8000/api/adocoes", this.adoption)
        .then(() => {
          alert("Adoção realizada com sucesso!");
        })
        .catch((error) => {
          if (error.response && error.response.data && error.response.data.errors) {
            this.errors = error.response.data.errors;
          } else {
            console.error("Erro ao realizar a adoção!", error);
          }
        });
    },
  },
};
</script>
