<template>
  <MainLayout>
    <!-- Conteúdo da página -->
    <div>
      <PetForm></PetForm>
      <PetList></PetList>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout.vue';
import PetForm from './components/PetForm.vue';
import PetList from './components/PetList.vue';

export default {
  components: {
    MainLayout,
    PetForm,
    PetList
  }
};
</script>
