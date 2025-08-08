<template>
  <svg
    width="18"
    height="3"
    viewBox="0 0 18 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 1.75488L17.5 1.75488" stroke="#808080" stroke-width="2" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: "w-4 h-4",
});

const iconClass = computed(() => props.class);
</script>

<style scoped></style>
