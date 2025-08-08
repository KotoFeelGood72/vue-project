<template>
  <div class="container mx-auto">
    <div class="flex gap-10">
      <div class="">
        <h1 class="lg:text-4xl font-light text-[#011E34]">{{ title }}</h1>
      </div>

      <div class="flex items-center gap-5">
        <div class="stars">
          <IconStar
            v-for="star in 5"
            :key="star"
            class="star-icon"
            :class="{ filled: star <= rating, empty: star > rating }"
            :color="star <= rating ? '#F93660' : '#D9D9D9'"
          />
        </div>

        <div class="flex items-center mt-1 gap-1 text-[#486AD9]">
          <div class="flex items-center justify-center">
            <IconReviews class="" />
          </div>
          <div class="-mt-0.5 mr-2">{{ reviewsCount }}</div>
          <div class="-mt-0.5">Отзывы</div>
        </div>
      </div>
    </div>
    <div class="text-[#011E34] font-light">Код товара: {{ productCode }}</div>
  </div>
</template>

<script setup lang="ts">
import IconStar from "./icons/IconStar.vue";
import IconReviews from "./icons/IconReviews.vue";
interface Props {
  title?: string;
  productCode?: string;
  rating?: number;
  reviewsCount?: number;
}

withDefaults(defineProps<Props>(), {
  title: "Люстра на штанге Freya FR5200PL-09FG",
  productCode: "676604-13328",
  rating: 4,
  reviewsCount: 32,
});
</script>

<style scoped>
.product-head {
  /* display: flex;
  justify-content: space-between;
  align-items: flex-start; */
  /* margin-bottom: 24px;
  padding: 20px 0;
  border-bottom: 1px solid #e5e7eb; */
}

.product-info {
  flex: 1;
  margin-right: 20px;
}

.product-title {
  font-size: 24px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.product-code {
  font-size: 14px;
  color: #6b7280;
  font-weight: 400;
}

.rating-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;
}

.stars {
  display: flex;
  gap: 2px;
}

.star-icon {
  width: 20px;
  height: 20px;
}

.reviews {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #3b82f6;
  font-size: 14px;
  font-weight: 500;
}

.chat-icon {
  width: 16px;
  height: 16px;
}

.reviews-count {
  color: #3b82f6;
}

/* Адаптивность */
@media (max-width: 768px) {
  .product-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .product-info {
    margin-right: 0;
  }

  .rating-section {
    align-items: flex-start;
  }

  .product-title {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .product-head {
    padding: 16px 0;
  }

  .product-title {
    font-size: 18px;
  }

  .stars {
    gap: 1px;
  }

  .star-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
