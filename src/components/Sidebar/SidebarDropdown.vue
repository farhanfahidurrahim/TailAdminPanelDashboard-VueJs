<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const sidebarStore = useSidebarStore()

const props = defineProps(['items', 'page'])
const items = ref(props.items)

const handleItemClick = (index: number) => {
  const pageName =
    sidebarStore.selected === props.items[index].label ? '' : props.items[index].label
  sidebarStore.selected = pageName
}
</script>

<template>
  <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
    <template v-for="(childItem, index) in items" :key="index">
      <li>
        <router-link
          :to="childItem.route"
          @click="handleItemClick(index)"
          class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
          :class="{
            '!text-white': childItem.label === sidebarStore.selected
          }"
        >
          <font-awesome-icon :icon="['far', 'circle']" v-if="childItem.icon" style="width: 14px; height: 14px;" />
          {{ childItem.label }}
        </router-link>
      </li>
    </template>
  </ul>
</template>
