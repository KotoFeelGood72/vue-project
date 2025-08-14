<template>
  <div>
    <SectionTitle title="Популярные запросы"/>
    <ul class="flex lg:gap-3 gap-1.5 overflow-x-auto overflow-y-hidden max-w-full w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none">
      <li v-for="(item, index) in popular" :key="index">
        <a
          href="#"
          class="inline-flex items-center px-4 py-2 lg:rounded-full rounded-[5px] max-lg:text-xs max-lg:py-1 max-lg:px-2 transition-colors whitespace-nowrap flex-shrink-0"
          :class="index === activeIndex ? 'bg-[#FFE81D] text-[#101828]' : 'bg-[#F2F4F7] text-[#344054] hover:bg-[#E4E7EC]'"
          @click.prevent="selectItem(index)"
        >
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'select', value: string): void }>()

const popular = [
  'Все',
  'Светодиодные',
  'Хрустальные',
  'Недорогие',
  'Для низких потолков',
  'С управлением',
  'Современные',
  'Белые',
  'Стеклянные плафоны',
  '3 плафона',
  '5 плафонов',
  'Потолочные светодиодные',
  'Светодиодные с пультом'
]

const activeIndex = ref(0)

function selectItem(index: number) {
  activeIndex.value = index
  emit('select', popular[index])
}

</script>

<style scoped></style>