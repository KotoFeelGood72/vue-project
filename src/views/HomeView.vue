<script setup lang="ts">
import { ref } from "vue";
import ThumbSlider from "../components/ThumbSlider.vue";
import ProductCard from "../components/ProductCard.vue";
import ProductHead from "../components/ProductHead.vue";
import ProductCardHead from "../components/ProductCardHead.vue";
import Button from "@/components/Button.vue";
import CharactersColumn from "@/components/CharactersColumn.vue";
import Faqs from "@/components/Faqs.vue";
import ProductDescription from "@/components/ProductDescription.vue";
import Services from "@/components/Services.vue";
import PopularBlocks from "@/components/PopularBlocks.vue";
import ProductBadges from "@/components/ProductBadges.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import NavigationTabs from "@/components/NavigationTabs.vue";
import ModalsServices from "@/components/modals/ModalsServices.vue";

// Компонент для ссылок
const LinkComponent = ref({
  template: '<a href="#" class="text-blue-500 hover:underline"><slot /></a>',
}) as any;

// Данные для характеристик
const sections = ref<any[]>([
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
    <div class="container mx-auto flex lg:gap-10 lg:!mb-[140px] !mb-6 flex-wrap  gap-6 justify-between">
      <ThumbSlider />
      <div class="flex-grow max-lg:w-full lg:max-w-[479px]">
        <ProductCardHead class="mb-6 lg:block hidden" />
        <ProductCard class="w-full mb-6" />
        <div class="lg:flex gap-2 hidden">
          <Button variant="outlineYellow" size="lg" full-width icon="discount">
            Хочу скидку
          </Button>
          <Button variant="outline" size="lg" full-width icon="bus">
            Доставка и возврат
          </Button>
        </div>
        <ProductBadges class="lg:hidden flex"/>
      </div>
    </div>
    <div class="container">
      <NavigationTabs class="lg:mb-[60px] mb-5" />
    </div>
    <div class="container">
      <SectionTitle title="Характеристики"/>
      <CharactersColumn
        :sections="sections"
        class="flex lg:gap-y-12 lg:gap-x-[150px] flex-wrap flex-col max-h-[750px] lg:mb-20 mb-6.5 gap-3 max-lg:w-full max-lg:max-h-full"
      />
      <ProductDescription class="lg:mb-10 mb-5" />
      <Services class="lg:mb-20 mb-5" />
      <PopularBlocks class="lg:mb-20 mb-5" />
    </div>
    <div class="container mt-12">
      <SectionTitle title="Вопрос/Ответ"/>
      <Faqs />
    </div>
    <ModalsServices/>
  </div>
</template>
