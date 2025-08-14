<template>
    <div>
        <h2 class="lg:text-4xl text-[15px] lg:font-medium font-semibold lg:mb-14 mb-4">{{ title }}</h2>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<style scoped>

</style>