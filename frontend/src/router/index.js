import {createRouter, createWebHistory} from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Surveys from "../views/Surveys.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import store from "../store/index.js";
import SurveyView from "../views/SurveyView.vue";


const routes = [
    {
      path: '/',
      redirect: '/dashboard',
      component: DefaultLayout,
      meta: {requiresAuth: true},
      children: [
        {path: '/dashboard', name: 'Dashboard', component: Dashboard},
        {path: '/surveys', name: 'Surveys', component: Surveys},
        {path: '/surveys/create', name: 'SurveyCreate', component: SurveyView},
        {path: '/surveys/:id', name: 'SurveyView', component: SurveyView},
      ]
    },
    {
      path: '/auth',
      redirect: '/login',
      name: 'Auth',
      component: AuthLayout,
      meta: {isGuest: true},
      children: [
        {
          name: 'Login',
          path: '/login',
          component: Login
        },
        {
          name: 'Register',
          path: '/register',
          component: Register
        },]

    },

  ]
;

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({name: 'Login'})
  } else if (store.state.user.token && (to.meta.isGuest)) {
    next({name: 'Dashboard'});
  } else {
    next();
  }
})

export default router;
