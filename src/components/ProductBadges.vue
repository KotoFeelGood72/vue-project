<template>
  <div
    class="flex gap-2 overflow-x-auto overflow-y-hidden pb-1 max-w-[421px] w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none"
  >
    <div
      v-for="badge in badges"
      :key="badge.id"
      :class="[
        'px-2 py-1 pb-1 rounded-full text-xs  whitespace-nowrap flex items-center flex-shrink-0',
        badge.type === 'blue' ? 'bg-[#486AD9] text-white' : 'bg-[#E8E8E8] ',
      ]"
    >
      <img :src="`/images/badges/${badge.img}.png`" alt="" class="mr-1" />
      <span>{{ badge.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const badges = [
  { id: "1", text: "Новинка", type: "blue" as const },
  { id: "2", text: "Гарантия 1 год", type: "gray" as const, img: "shield" },
  { id: "3", text: "Оригинальный товар", type: "gray" as const, img: "or" },
  { id: "4", text: "Бесплатная доставка", type: "gray" as const, img: "car" },
];
</script>
