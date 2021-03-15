import { createRouter, createWebHashHistory } from 'vue-router';
import ContactsPage from '../pages/ContactsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import CreatePage from '../pages/CreatePage.vue';

const routes = [
  {
    path: '/',
    name: 'Contact',
    component: ContactsPage,
    // props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: CreatePage,
    // props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
