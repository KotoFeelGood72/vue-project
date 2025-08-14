<template>
  <div
    class="flex justify-start items-center gap-4 lg:gap-x-10 lg:text-2xl text-xs overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none"
  >
    <a
      v-for="tab in tabs"
      :key="tab.id"
      href="#"
      class="whitespace-nowrap flex-shrink-0 block"
    >
      {{ tab.text }}
    </a>
  </div>
</template>

<script setup lang="ts">
const tabs = [
  { id: "1", text: "Характеристики" },
  { id: "2", text: "Описание" },
  { id: "3", text: "Популярные запросы" },
  { id: "4", text: "Вопрос/Ответ" },
  { id: "5", text: "Отзывы" },
];
</script>
