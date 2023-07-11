<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Регистрация</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="register">
        <div>
          <label for="fullname" class="block text-sm font-medium leading-6 text-gray-900">Введите ваше полное имя</label>
          <div class="mt-2">
            <input id="fullname" name="" type="text" placeholder="Имя и фамилия" autocomplete="name" v-model="user.name" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Введите еmail</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" placeholder="Введите email" autocomplete="email" v-model="user.email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div class="mt-2">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Введите пароль</label>
          <div class="mt-2">
            <input id="password" name="password" type="password" placeholder="Введите пароль" autocomplete="current-password" v-model="user.password" required=""  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div class="mt-2">
          <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Подтвердите пароль</label>
          <div class="mt-2">
            <input id="password_confirmation" name="password_confirmation" type="password" placeholder="Подтвердите пароль" autocomplete="current-password_confirmation" v-model="user.password_confirmation" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Регистрация</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        У вас уже есть аккаунт?
        {{ ' ' }}
        <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Войти</router-link>
      </p>
    </div>
</template>

<script setup>
import store from "../store/index.js";
import {useRouter} from "vue-router";

const router = useRouter();
const user = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
}

function register(ev) {
  ev.preventDefault();

store
.dispatch('register', user)
.then((res) => {
  router.push({
    name: 'Dashboard'
  })
})
}
</script>

