<script setup lang="ts">
import DefaultAuthCard from '@/components/Auths/DefaultAuthCard.vue'
import { ref } from 'vue'
import axios from "../../http"
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

const toast = useToast();
const router = useRouter();
const errors = ref({});

const email = ref("");
const password = ref("");

const login = async () => {
  try {
    const response = await axios.post("api/v1/login",{
      email: email.value,
      password: password.value,
    })

    console.log("Response=>", response)
    const data = response.data.data;
    console.log("Data=>", data);

    if(data && data.token){
      const { token, user } = data;
      console.log("Token:", token);
      console.log("User:", user);

      // Save token, userinfo in local storage
      const userData = {
        name: user.name,
        email: user.email,
      }
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("authToken", token.toString());
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      toast.success("Login successful!");
      router.push({ name: "dashboard" });
    } else {
      console.error("Something undefined");
      toast.error("Login failed!");
    }
  }catch (error) {
    if (error.response && error.response.data.errors) {
      errors.value = error.response.data.errors;
    } else {
      console.error("Error:", error);
    }
  }
}
</script>

<template>
  <DefaultAuthCard subtitle="Start for free" title="Sign In to TailAdmin">
    <form @submit.prevent="login">
      <div class="mb-4">
        <label class="mb-2.5 block font-medium text-black dark:text-white">Email</label>
        <div class="relative">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white"
          />
          <div v-if="errors.email" style="color: red;">
            {{ errors.email[0] }}
          </div>
        </div>
      </div>

      <div class="mb-4">
        <label class="mb-2.5 block font-medium text-black dark:text-white">Password</label>
        <div class="relative">
          <input
            type="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white"
          />
          <div v-if="errors.password" style="color: red;">
            {{ errors.password[0] }}
          </div>
        </div>
      </div>

      <div class="mb-5 mt-6">
        <input
          type="submit"
          value="Sign In"
          class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        />
      </div>
    </form>
  </DefaultAuthCard>
</template>
