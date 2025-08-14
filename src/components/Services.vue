<template>
  <div class="bg-[#F8F8F8] lg:p-8 rounded-[10px] p-2">
    <ul class="grid lg:grid-cols-4 lg:gap-x-20 gap-px grid-cols-2 max-lg:bg-[#E8E8E8]">
      <li v-for="(item, index) in services" :key="index" class="text-center relative bg-[#F8F8F8] max-lg:p-2">
        <img :src="item.img" class="mx-auto lg:!mb-5 mb-2  max-lg:w-[50px] " />
        <h3 class="lg:text-xl font-semibold mb-1.5 text-[15px]">{{ item.title }}</h3>
        <p class=" max-lg:text-xs">{{ item.description }}</p>
        <div
          v-if="index < services.length - 1"
          class="absolute top-0 right-0 bottom-0 w-px bg-gray-300 transform translate-x-10 max-lg:hidden"
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

<style scoped>

li:nth-child(3) img {
  max-width: 39px;
}
</style>
