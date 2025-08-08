<template>
  <div>
    <div v-for="section in sections" :key="section.title" class="mb-6">
      <h3 class="text-xl font-semibold mb-3">{{ section.title }}</h3>
      <ul class="space-y-2">
        <li
          v-for="character in section.characters"
          :key="character.name"
          class="flex justify-between items-center"
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
  </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
