<template>
  <div
    class="flex justify-start items-center gap-2 overflow-x-auto overflow-y-hidden pb-1  max-w-full w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
  >
    <div
      v-for="badge in badges"
      :key="badge.id"
      @click="handleBadgeClick(badge)"
      :class="[
        'px-2 py-1 pb-1 rounded-full text-xs whitespace-nowrap flex items-center flex-shrink-0 justify-start transition-colors cursor-pointer',

        badge.type === 'blue' ? 'bg-[#486AD9] text-white hover:bg-[#3a5bc7]' : 'bg-[#E8E8E8] hover:bg-[#d8d8d8]',
      ]"
    >
      <img :src="`/images/badges/${badge.img}.png`" alt="" class="mr-1" />
      <span>{{ badge.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

interface BadgeData {
  id: string;
  text: string;
  type: 'blue' | 'gray';
  img?: string;
  modalData?: {
    title: string;
    description: string;
    image: string;
  };
}

const badges: BadgeData[] = [
  { 
    id: "1", 
    text: "Новинка", 
    type: "blue",
    modalData: {
      title: "Новинка",
      description: "Этот товар является новинкой в нашем каталоге. Мы рады представить вам самые свежие и актуальные модели.",
      image: "/images/modal-images/modal_img_3.png"
    }
  },
  { 
    id: "2", 
    text: "Гарантия 1 год", 
    type: "gray", 
    img: "shield",
    modalData: {
      title: "Гарантия 1 год",
      description: "На все наши товары предоставляется гарантия 1 год. Мы гарантируем качество и надежность каждого изделия.",
      image: "/images/modal-images/modal_img_1.png"
    }
  },
  { 
    id: "3", 
    text: "Оригинальный товар", 
    type: "gray", 
    img: "or",
    modalData: {
      title: "Оригинальный товар",
      description: "Мы предлагаем только оригинальные товары от производителей. Никаких подделок и копий.",
      image: "/images/modal-images/modal_img_0.png"
    }
  },
  { 
    id: "4", 
    text: "Бесплатная доставка", 
    type: "gray", 
    img: "car",
    modalData: {
      title: "Бесплатная доставка",
      description: "Доставка по всей России бесплатно при заказе от определенной суммы. Быстрая и надежная доставка.",
      image: "/images/modal-images/modal_img_2.png"
    }
  },
];

const handleBadgeClick = (badge: BadgeData) => {
  
  if (badge.modalData) {
    // Передаем данные в модальное окно через router или emit
    router.push({
      name: 'home',
      query: {
        modal: 'services',
        title: badge.modalData.title,
        description: badge.modalData.description,
        image: badge.modalData.image
      }
    });
  }
};
</script>
