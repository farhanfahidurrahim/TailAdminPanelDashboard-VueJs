<script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'
import axios from 'axios'

const pageTitle = ref('Brand Create')
const selectedOption = ref<string>('')
const isOptionSelected = ref<boolean>(false)

const changeTextColor = () => {
  isOptionSelected.value = true
}

const createBrand = async () => {
  try{
    const url = "api/v1/brands";
    const response = await axios.post(url, {
      name: selectedOption.value,
    })
  }catch(error){

  }
}
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <!-- ====== Form Layout Section Start -->
    <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div class="flex flex-col gap-9">
        <!-- Contact Form Start -->
        <DefaultCard cardTitle="Brand Form">
          <form @submit.prevent="createBrand">
            <div class="p-6.5">

              <InputGroup
                label="Brand Name"
                type="email"
                placeholder="Enter Name"
                customClasses="mb-4.5"
                required
              />

              <div class="mb-4.5">
                <label class="mb-2.5 block text-black dark:text-white"> Category </label>

                <div class="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    v-model="selectedOption"
                    class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    :class="{ 'text-black dark:text-white': isOptionSelected }"
                    @change="changeTextColor"
                  >
                    <option value="" disabled selected>Select your category</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                  </select>

                  <span class="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      class="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="mb-6">
                <label class="mb-2.5 block text-black dark:text-white"> Description </label>
                <textarea
                  rows="3"
                  placeholder="Type your details"
                  class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>
              <button
                class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </DefaultCard>
        <!-- Contact Form End -->
      </div>
    </div>
    <!-- ====== Form Layout Section End -->
  </DefaultLayout>
</template>
