<template>
  <div>
    <div 
      v-for="(section, index) in sections" 
      :key="section.title" 
      class="mb-6"
      :class="{ 'hidden': isMobile && !isExpanded && index > 0 }"
    >
      <h3 class="lg:text-xl text-[15px] font-semibold mb-3">{{ section.title }}</h3>
      <ul class="space-y-2">
        <li
          v-for="character in section.characters"
          :key="character.name"
          class="flex justify-between items-center max-lg:text-xs"
        >
          <span class="text-gray-600">{{ character.name }}</span>
          <div class="flex-1 mx-1 border-b border-dotted border-gray-300 -mb-2"></div>
          <div class="flex items-center gap-2">
            <span class="text-gray-900">{{ character.value }}</span>
            <component v-if="character.link" :is="character.link" />
          </div>
        </li>
      </ul>
    </div>
    <button 
      @click="toggleExpanded"
      class="max-lg:text-xs py-2 px-10 flex lg:hidden border-2 border-[#FFDD00] rounded-[10px] w-full justify-center items-center"
    >
      {{ isExpanded ? 'Свернуть характеристики' : 'Развернуть характеристики' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Character {
  name: string;
  value: string;
  link?: any;
}

interface Section {
  title: string;
  characters: Character[];
}

defineProps<{
  sections: Section[];
}>();

const isExpanded = ref(false);
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024; // lg breakpoint
};

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped></style>
