<template>
  <div class="text-[#011E34] shadow-custom rounded-[10px] p-5">
    <ProductBadges />
    <div class="price-section">
      <div class="flex gap-5 items-end">
        <div class="text-[45px] font-semibold">14 875 ₽</div>
        <div class="mb-2.5 text-sm flex items-center gap-2">
          <div class="flex items-center justify-center">
            <IconGreenCheck />
          </div>
          <p>В наличии 9999 шт.</p>
        </div>
      </div>

      <div class="mb-3 flex gap-3">
        <span class="text-xl font-light text-[#011E34] line-through decoration-[#F93660]"
          >17 500 ₽</span
        >
        <span class="bg-[#F93660] text-white px-2 py-0.5 rounded-full font-semibold">
          -15%
        </span>
      </div>
      <div class="flex items-center gap-1 mb-5">
        <span class="bg-[#FFE81D] px-2 py-0.5 rounded-full font-semibold"> 140 ₽ </span>

        <div class="">х 6 платежей</div>
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="20"
            viewBox="0 0 2 20"
            fill="none"
          >
            <path d="M1 0.5L1 19.5" stroke="#DADADA" />
          </svg>
        </div>
        <div class="flex items-center gap-1">
          <p>Рассрочка</p>

          <IconQuest />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3 mb-5">
      <Button variant="primary" size="lg" full-width> Добавить в корзину </Button>
      <Button variant="secondary" size="lg" full-width> Купить в 1 клик </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductBadges from "./ProductBadges.vue";
import Button from "./Button.vue";
import IconGreenCheck from "./icons/IconGreenCheck.vue";
import IconQuest from "./icons/IconQuest.vue";
import IconDiscount from "./icons/IconDiscount.vue";
import IconDelivery from "./icons/IconDelivery.vue";

// Компонент карточки товара
</script>

<style scoped>
.shadow-custom {
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
}
</style>
