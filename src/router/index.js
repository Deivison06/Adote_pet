import { createRouter, createWebHistory } from 'vue-router';
import PetList from '@/components/PetList.vue';
import PetForm from '@/components/PetForm.vue';
import AdoptionForm from '@/components/AdoptionForm.vue';
import AdoptionList from '@/components/AdoptionList.vue';

const routes = [
  {
    path: '/',
    name: 'PetList',
    component: PetList
  },
  {
    path: '/add-pet',
    name: 'PetForm',
    component: PetForm
  },
  {
    path: '/adopt-pet',
    name: 'AdoptionForm',
    component: AdoptionForm
  },
  {
    path: '/adoption-list',
    name: 'AdoptionList',
    component: AdoptionList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
