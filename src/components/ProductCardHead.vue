<template>
  <div>
    <ul class="text-[#011E34] flex gap-8">
      <li class="flex items-center gap-2 cursor-pointer">
        <div>
          <IconHeart />
        </div>
        <div>Добавить в избранное</div>
      </li>
      <li class="flex items-center gap-2 cursor-pointer">
        <div>
          <IconCompare />
        </div>
        <div>Сравнить</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IconHeart from "./icons/IconHeart.vue";
import IconCompare from "./icons/IconCompare.vue";
</script>

<style scoped></style>
