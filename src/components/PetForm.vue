<template>
  <div>
    <h2>Cadastrar Pet</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome</label>
        <input type="text" class="form-control" id="nome" v-model="pet.nome" required />
        <div v-if="errors.nome" class="text-danger">{{ errors.nome[0] }}</div>
      </div>

      <div class="mb-3">
        <label for="foto" class="form-label">Foto (URL)</label>
        <input type="text" class="form-control" id="foto" v-model="pet.foto" required />
      </div>
      <div class="mb-3">
        <label for="historia" class="form-label">História</label>
        <textarea
          class="form-control"
          id="historia"
          v-model="pet.historia"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
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
      pet: {
        nome: "",
        historia: "",
        foto: "",
      },
      errors: {},
    };
  },
  // Restante do código...
  methods: {
    submitForm() {
      axios
        .post("http://127.0.0.1:8000/api/pets", this.pet)
        .then((response) => {
          console.log("Pet cadastrado com sucesso!", response.data);
          this.pet = { nome: "", historia: "", foto: "" };
        })
        .catch((error) => {
          if (error.response && error.response.data && error.response.data.errors) {
            this.errors = error.response.data.errors;
          } else {
            console.error("Erro ao cadastrar o pet!", error);
          }
        });
    },
  },
};
</script>
