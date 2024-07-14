<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BrandOne from '@/assets/images/brand/brand-01.svg'
import BrandTwo from '@/assets/images/brand/brand-02.svg'
import BrandThree from '@/assets/images/brand/brand-03.svg'
import BrandFour from '@/assets/images/brand/brand-04.svg'
import BrandFive from '@/assets/images/brand/brand-05.svg'
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'

const brandData = ref([
  {
    logo: BrandOne,
    name: 'Google',
    visitors: 3.5,
    revenues: '5,768',
    sales: 590,
    conversion: 4.8,
    action: 'Edit'
  },
  {
    logo: BrandTwo,
    name: 'Twitter',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
    action: 4.8
  },
  {
    logo: BrandThree,
    name: 'Github',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
    action: 4.8
  },
])

const pageTitle = ref('Products')
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <div class="flex flex-col gap-10">
      <!-- Form Element Start -->
      <div
        class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >

        <div class="flex justify-between items-center">
          <h4 class="mb-6 text-xl font-semibold text-black dark:text-white">Top Channels</h4>
          <router-link to="/product/create" class="bg-primary text-white rounded-full py-2 px-4">Add New</router-link>
        </div>

        <div class="flex flex-col">
          <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
            <div class="p-2.5 xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Source</h5>
            </div>
            <div class="p-2.5 text-center xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Visitors</h5>
            </div>
            <div class="p-2.5 text-center xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Revenues</h5>
            </div>
            <div class="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Sales</h5>
            </div>
            <div class="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Conversion</h5>
            </div>
            <div class="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 class="text-sm font-medium uppercase xsm:text-base">Action</h5>
            </div>
          </div>

          <div
            v-for="(brand, key) in brandData"
            :key="key"
            :class="`grid grid-cols-3 sm:grid-cols-6 ${
          key === brandData.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
        }`"
          >
            <div class="flex items-center gap-3 p-2.5 xl:p-3">
              <div class="flex-shrink-0">
                <img :src="brand.logo" alt="Brand" />
              </div>
              <p class="hidden text-black dark:text-white sm:block">{{ brand.name }}</p>
            </div>

            <div class="flex items-center justify-center p-2.5 xl:p-5">
              <p class="text-black dark:text-white">{{ brand.visitors }}K</p>
            </div>

            <div class="flex items-center justify-center p-2.5 xl:p-5">
              <p class="text-meta-3">${{ brand.revenues }}</p>
            </div>

            <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p class="text-black dark:text-white">{{ brand.sales }}</p>
            </div>

            <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p class="text-meta-5">{{ brand.conversion }}%</p>
            </div>

            <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p class="text-meta-5">{{ brand.action }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Form Element End -->
    </div>
  </DefaultLayout>
</template>
