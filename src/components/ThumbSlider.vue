<template>
  <div class="flex gap-[100px]">
    <div class="w-[120px] max-h-[530px] flex-shrink-0 relative">
      <button
        v-if="!isThumbsBeginning"
        @click="navigateThumbs('prev')"
        class="w-16 h-16 bg-white rounded-2xl absolute top-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center cursor-pointer"
      >
        <IconChevron class="w-4 h-4 rotate-180" />
      </button>

      <swiper
        :modules="[SwiperThumbs]"
        :direction="'vertical'"
        :space-between="12"
        :slides-per-view="4"
        :watch-slides-progress="true"
        :free-mode="true"
        class="h-full"
        @swiper="setThumbsSwiper"
        @slide-change="handleThumbsSlideChange"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" class="w-full h-full object-cover rounded-2xl" />
        </swiper-slide>
      </swiper>

      <button
        v-if="!isThumbsEnd"
        @click="navigateThumbs('next')"
        class="w-16 h-16 bg-white rounded-2xl absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center cursor-pointer"
      >
        <IconChevron class="w-4 h-4" />
      </button>
    </div>
    <div class="flex-1 max-w-[550px] h-full">
      <swiper
        :modules="[SwiperThumbs, SwiperNavigation, SwiperPagination]"
        :thumbs="{ swiper: thumbsSwiper }"
        :space-between="0"
        class="relative h-full"
        @swiper="setMainSwiper"
        @slide-change="handleSlideChange"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="h-full flex items-center justify-center"
        >
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconChevron from "./icons/IconChevron.vue";
import { ref, nextTick, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Thumbs as SwiperThumbs,
  Navigation as SwiperNavigation,
  Pagination as SwiperPagination,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const thumbsSwiper = ref<SwiperType | null>(null);
const mainSwiper = ref<SwiperType | null>(null);
const activeIndex = ref(0);
const isThumbsBeginning = ref(true);
const isThumbsEnd = ref(false);

const slides: Slide[] = [
  {
    image: "/images/product.jpg",
    title: "Современная люстра",
    description:
      "Элегантная люстра с пятью источниками света в матовом металлическом оттенке",
  },
  {
    image: "/images/product.jpg",
    title: "Классический дизайн",
    description: "Традиционная люстра с хрустальными подвесками и позолотой",
  },
  {
    image: "/images/product.jpg",
    title: "Минималистичный стиль",
    description: "Современная люстра с простыми линиями и чистым дизайном",
  },
  {
    image: "/images/product.jpg",
    title: "Индустриальный стиль",
    description: "Люстра в стиле лофт с металлическими элементами",
  },
  {
    image: "/images/product.jpg",
    title: "Арт-деко",
    description: "Роскошная люстра в стиле арт-деко с геометрическими формами",
  },
];

onMounted(() => {
  isThumbsBeginning.value = true;
  isThumbsEnd.value = slides.length <= 4;
});

const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper;
  nextTick(() => {
    updateThumbsState();
  });
};

const setMainSwiper = (swiper: SwiperType) => {
  mainSwiper.value = swiper;
};

const handleSlideChange = (swiper: SwiperType) => {
  activeIndex.value = swiper.activeIndex;
};

const handleThumbsSlideChange = (swiper: SwiperType) => {
  updateThumbsState();
};

const updateThumbsState = () => {
  if (thumbsSwiper.value) {
    const canScrollUp = thumbsSwiper.value.activeIndex > 0;
    const canScrollDown = thumbsSwiper.value.activeIndex < slides.length - 4;

    isThumbsBeginning.value = !canScrollUp;
    isThumbsEnd.value = !canScrollDown;
    if (slides.length <= 4) {
      isThumbsBeginning.value = true;
      isThumbsEnd.value = true;
    }
  }
};

const navigateThumbs = (direction: "prev" | "next") => {
  if (thumbsSwiper.value) {
    if (direction === "prev") {
      thumbsSwiper.value.slidePrev();
    } else {
      thumbsSwiper.value.slideNext();
    }
    setTimeout(updateThumbsState, 100);
  }
};
</script>

<style scoped></style>
