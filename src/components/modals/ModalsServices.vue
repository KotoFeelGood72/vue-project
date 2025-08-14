<template>
  <Transition name="modal">
    <div v-if="isVisible" class="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center" @click="closeModal">
      <div class="modal-main bg-white flex flex-col rounded-lg p-6 max-w-md mx-4 relative lg:min-h-[430px] min-h-[283px] max-lg:max-w-[283px]" @click.stop>
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer">
          <IconClose />
        </button>
        <div class="flex-grow flex items-center justify-center">
          <img :src="image" alt="" class="lg:max-w-[184px] mx-auto mb-4 max-w-[114px]" />
        </div>
        <div class="border-t border-[#F0F0F0] mb-3"></div>
        <h3 class="lg:text-2xl font-semibold lg:mb-4 mb-2">{{ title }}</h3>
        <div class=" lg:mb-5 mb-3 max-lg:text-xs">{{ description }}</div>
        <Button @click="closeModal" variant="primary" size="lg" full-width>Понятно</Button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import IconClose from "../icons/IconClose.vue";
import Button from "../Button.vue";

const route = useRoute();
const router = useRouter();

const isVisible = computed(() => route.query.modal === 'services');

const title = computed(() => route.query.title as string || 'Информация');
const description = computed(() => route.query.description as string || 'Описание недоступно');
const image = computed(() => route.query.image as string || '/images/modal-images/modal_img_0.png');

const closeModal = () => {
  const newQuery = { ...route.query };
  delete newQuery.modal;
  delete newQuery.title;
  delete newQuery.description;
  delete newQuery.image;
  
  router.push({
    name: route.name as string,
    query: newQuery
  });
};
</script>

<style scoped>
.modal-main {
  max-height: 90vh;
  overflow-y: auto;
}

/* Анимация появления модального окна */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-to {
  opacity: 1;
}

.modal-leave-from {
  opacity: 1;
}

.modal-leave-to {
  opacity: 0;
}

/* Анимация для внутреннего контента модального окна */
.modal-enter-active .modal-main,
.modal-leave-active .modal-main {
  transition: all 0.3s ease;
}

.modal-enter-from .modal-main {
  opacity: 0;
  transform: translateY(30px);
}

.modal-enter-to .modal-main {
  opacity: 1;
  transform: translateY(0);
}

.modal-leave-from .modal-main {
  opacity: 1;
  transform: translateY(0);
}

.modal-leave-to .modal-main {
  opacity: 0;
  transform: translateY(30px);
}
</style>
