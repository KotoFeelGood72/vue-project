<script setup lang="ts">
import { ref } from "vue";
import SwiperExample from "../components/SwiperExample.vue";
import ThumbSlider from "../components/ThumbSlider.vue";
import ProductCard from "../components/ProductCard.vue";
import ProductHead from "../components/ProductHead.vue";
import ProductCardHead from "../components/ProductCardHead.vue";
import Button from "@/components/Button.vue";
import CharactersColumn from "@/components/CharactersColumn.vue";
import Faqs from "@/components/Faqs.vue";
import ProductDescription from "@/components/ProductDescription.vue";
import Services from "@/components/Services.vue";

// Компонент для ссылок
const LinkComponent = {
  template: '<a href="#" class="text-blue-500 hover:underline"><slot /></a>',
};

// Данные для характеристик
const sections = ref([
  {
    title: "Основные",
    characters: [
      { name: "Артикул", value: "676604-13328" },
      { name: "Степень защиты ip", value: "20" },
      { name: "Тип лампы", value: "накаливания или LED" },
      { name: "Тип цоколя", value: "E14" },
      { name: "Количество ламп", value: "4 шт" },
      { name: "Площадь освещения", value: "12 кв.м" },
      { name: "Длина", value: "400 мм" },
      { name: "Высота", value: "250 мм" },
      { name: "Ширина/диаметр", value: "400 мм" },
      { name: "Мощность общая", value: "160 W" },
      { name: "Цвет арматуры", value: "черный" },
      { name: "Цвет плафона", value: "золото матовое" },
    ],
  },
  {
    title: "Внешний вид",
    characters: [
      { name: "Стиль", value: "лофт" },
      { name: "Форма", value: "квадрат" },
      { name: "Форма плафона", value: "цилиндр" },
      { name: "Количество плафонов", value: "15" },
    ],
  },
  {
    title: "Размер",
    characters: [
      { name: "Высота минимальная", value: "189 мм" },
      { name: "Регулировка по высоте", value: "Да" },
    ],
  },
  {
    title: "Материалы",
    characters: [
      { name: "Материал арматуры", value: "алюминий" },
      { name: "Материал плафона", value: "алюминий" },
    ],
  },
  {
    title: "Лампы",
    characters: [
      { name: "Мощность лампы", value: "15 W" },
      { name: "Напряжение", value: "220 V" },
    ],
  },
  {
    title: "Упаковка",
    characters: [
      { name: "Объем коробки", value: "0.15 куб.м" },
      { name: "Количество грузовых мест", value: "1 шт" },
      { name: "Вес коробки", value: "7.3 кг" },
      { name: "Размер коробки (ДхШхВ)", value: "1080x1080x130" },
    ],
  },
  {
    title: "Дополнительно",
    characters: [
      { name: "Бренд", value: "Denkirs" },
      { name: "Страна происхождения", value: "Словения" },
      { name: "Артикул", value: "20" },
      { name: "Коллекция", value: "Orbit", link: LinkComponent },
      { name: "Место установки", value: "Denkirs", link: LinkComponent },
      { name: "Площадь освещения", value: "22 кв.м" },
      { name: "В коллекции бра", value: "Да" },
      { name: "Тип подвеса", value: "Трос (провод)", link: LinkComponent },
      { name: "Гарантия", value: "3 года" },
      { name: "Способ крепления", value: "Монтажная пластина, Подвесы" },
      { name: "Подраздел", value: "Подвесные светильники", link: LinkComponent },
      { name: "Раздел", value: "Светильники", link: LinkComponent },
      { name: "Скачать 3D модель", value: "Скачать", link: LinkComponent },
    ],
  },
]);
</script>

<template>
  <div>
    <ProductHead class="!mb-6" />
    <div class="container mx-auto flex gap-40 !mb-[140px]">
      <ThumbSlider />
      <div class="flex-grow w-full">
        <ProductCardHead class="mb-6" />
        <ProductCard class="w-full mb-5" />
        <div class="flex gap-2">
          <Button variant="outlineYellow" size="lg" full-width icon="discount">
            Хочу скидку
          </Button>
          <Button variant="outline" size="lg" full-width icon="bus">
            Доставка и возврат
          </Button>
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="flex gap-x-10 text-2xl mb-[60px]">
        <li><a href="#">Характеристики</a></li>
        <li><a href="#">Описание</a></li>
        <li><a href="#">Популярные запросы</a></li>
        <li><a href="#">Вопрос/Ответ</a></li>
        <li><a href="#">Отзывы</a></li>
      </ul>
    </div>
    <div class="container">
      <CharactersColumn
        :sections="sections"
        class="flex gap-y-12 gap-x-[150px] flex-wrap flex-col max-h-[750px]"
      />
      <ProductDescription class="mb-20" />
      <Services />
    </div>
    <div class="container mt-12">
      <h2 class="text-2xl font-semibold mb-6">Вопрос/Ответ</h2>
      <Faqs />
    </div>
  </div>
</template>
