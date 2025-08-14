<template>
  <div class="lg:space-y-10 space-y-5">
    <div v-for="(faq, index) in faqs" :key="index" class="">
      <button
        @click="toggleFaq(index)"
        class="w-full flex justify-between items-center cursor-pointer"
      >
        <h3 class="lg:text-xl text-xs max-lg:font-semibold max-lg:text-left">
          {{ faq.question }}
        </h3>
        <div class="flex-shrink-0">
          <IconPlus v-if="!faq.isOpen" class="lg:w-5 lg:h-5 w-3 h-3 text-gray-500" />
          <IconMinus v-else class="lg:w-5 lg:h-5 w-3 h-3 text-gray-500" />
        </div>
      </button>

      <div v-show="faq.isOpen" class="mt-3 leading-relaxed max-lg:text-xs max-lg:leading-normal ">
        <p v-html="faq.answer"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconPlus from "./icons/IconPlus.vue";
import IconMinus from "./icons/IconMinus.vue";

interface Faq {
  question: string;
  answer: string;
  isOpen: boolean;
}

const faqs = ref<Faq[]>([
  {
    question: "Можно ли купить этот товар дешевле?",
    answer:
      'Цена товара "Подвесная люстра Eurosvet 90241/1 белый/серебро Smart" - 8150 Р. Покажите, где можно купить конкретный товар дешевле и мы сделаем вам еще более выгодное предложение. А еще вы можете получить скидку 10% на первый заказ, если подпишетесь на наши новости по <a href="#" class="text-blue-500 underline">ссылке</a>.',
    isOpen: true,
  },
  {
    question:
      "Подойдет ли Подвесная люстра Eurosvet 90241/1 белый/серебро Smart для помещения?",
    answer:
      "Да, эта люстра отлично подходит для различных помещений. Она имеет универсальный дизайн и подходит как для гостиных, так и для спален, кухонь и других комнат.",
    isOpen: false,
  },
  {
    question:
      "Есть ли гарантия на товар Подвесная люстра Eurosvet 90241/1 белый/серебро Smart?",
    answer:
      "Да, на все наши товары предоставляется гарантия производителя. Срок гарантии указан в описании товара и может составлять от 1 до 3 лет в зависимости от производителя.",
    isOpen: false,
  },
  {
    question: "Есть ли у вас специальные условия для дизайнеров интерьеров?",
    answer:
      "Да, мы предлагаем специальные условия для дизайнеров интерьеров. Свяжитесь с нами для получения подробной информации о программе лояльности для профессионалов.",
    isOpen: false,
  },
]);

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>
