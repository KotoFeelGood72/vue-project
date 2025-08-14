<template>
  <div>
    <ul class="text-[#011E34] flex lg:gap-8 gap-4">
      <li class="flex items-center gap-2 cursor-pointer">
        <div>
          <IconHeart class="max-lg:w-3.5 max-lg:h-3.5" />
        </div>
        <div v-if="!visibleIcons">Добавить в избранное</div>
      </li>
      <li class="flex items-center gap-2 cursor-pointer">
        <div>
          <IconCompare class="max-lg:w-3.5 max-lg:h-3.5" />
        </div>
        <div v-if="!visibleIcons">Сравнить</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IconHeart from "./icons/IconHeart.vue";
import IconCompare from "./icons/IconCompare.vue";


withDefaults(defineProps<{
  visibleIcons?: boolean;
}>(), {
  visibleIcons: false,
});
</script>

<style scoped></style>
