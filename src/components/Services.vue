<template>
  <div class="bg-[#F8F8F8] p-8 rounded-[10px]">
    <ul class="grid grid-cols-4 gap-x-20">
      <li v-for="(item, index) in services" :key="index" class="text-center relative">
        <img :src="item.img" class="mx-auto !mb-5" />
        <h3 class="text-xl font-semibold mb-1.5">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div
          v-if="index < services.length - 1"
          class="absolute top-0 right-0 bottom-0 w-px bg-gray-300 transform translate-x-10"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Бесплатный подбор освещения",
    description: "Подберем для вас освещение под любой бюджет",
    img: "/images/services/services-0.png",
  },
  {
    title: "Простой возврат",
    description: "Что-то пошло не так? Примем без лишних вопросов и проволочек",
    img: "/images/services/services-1.png",
  },
  {
    title: "Гарантия 300 дней",
    description: "Ваши покупки под надежной защитой",
    img: "/images/services/services-2.png",
  },
  {
    title: "Лучшие цены",
    description: "Мы держим цены низкими. Это наш принцип и правило.",
    img: "/images/services/services-3.png",
  },
];
</script>

<style scoped></style>
