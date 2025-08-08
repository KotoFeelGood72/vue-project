<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
    class="py-3.5 text-lg rounded-[10px] font-semibold cursor-pointer flex items-center gap-2 justify-center"
  >
    <img v-if="icon" :src="`/images/${icon}.png`" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "primary" | "secondary" | "outline" | "outlineYellow";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: any;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",

  disabled: false,
  fullWidth: false,
});

defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClasses = computed(() => {
  const variantClasses = {
    primary: "bg-[#FFE81D] ",
    secondary: "border-2 border-[#F4F6F8]",
    outline: "shadow-custom bg-white",
    outlineYellow: "border-1 border-[#FFE81D]",
  };

  const widthClass = props.fullWidth ? "w-full" : "";

  return [variantClasses[props.variant], widthClass].join(" ");
});
</script>

<style scoped>
.shadow-custom {
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
}
</style>
