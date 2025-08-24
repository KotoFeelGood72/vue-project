// Данные для характеристик
const sections = [
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
      { name: "Коллекция", value: "Orbit", link: true },
      { name: "Место установки", value: "Denkirs", link: true },
      { name: "Площадь освещения", value: "22 кв.м" },
      { name: "В коллекции бра", value: "Да" },
      { name: "Тип подвеса", value: "Трос (провод)", link: true },
      { name: "Гарантия", value: "3 года" },
      { name: "Способ крепления", value: "Монтажная пластина, Подвесы" },
      { name: "Подраздел", value: "Подвесные светильники", link: true },
      { name: "Раздел", value: "Светильники", link: true },
      { name: "Скачать 3D модель", value: "Скачать", link: true },
    ],
  },
];

// Данные для FAQ
const faqs = [
  {
    question: "Можно ли купить этот товар дешевле?",
    answer: 'Цена товара "Подвесная люстра Eurosvet 90241/1 белый/серебро Smart" - 8150 Р. Покажите, где можно купить конкретный товар дешевле и мы сделаем вам еще более выгодное предложение. А еще вы можете получить скидку 10% на первый заказ, если подпишетесь на наши новости по <a href="#" class="text-blue-500 underline">ссылке</a>.',
    isOpen: true,
  },
  {
    question: "Подойдет ли Подвесная люстра Eurosvet 90241/1 белый/серебро Smart для помещения?",
    answer: "Да, эта люстра отлично подходит для различных помещений. Она имеет универсальный дизайн и подходит как для гостиных, так и для спален, кухонь и других комнат.",
    isOpen: false,
  },
  {
    question: "Есть ли гарантия на товар Подвесная люстра Eurosvet 90241/1 белый/серебро Smart?",
    answer: "Да, на все наши товары предоставляется гарантия производителя. Срок гарантии указан в описании товара и может составлять от 1 до 3 лет в зависимости от производителя.",
    isOpen: false,
  },
  {
    question: "Есть ли у вас специальные условия для дизайнеров интерьеров?",
    answer: "Да, мы предлагаем специальные условия для дизайнеров интерьеров. Свяжитесь с нами для получения подробной информации о программе лояльности для профессионалов.",
    isOpen: false,
  },
];

// Данные для популярных тегов
const popular = [
  'Все',
  'Светодиодные',
  'Хрустальные',
  'Недорогие',
  'Для низких потолков',
  'С управлением',
  'Современные',
  'Белые',
  'Стеклянные плафоны',
  '3 плафона',
  '5 плафонов',
  'Потолочные светодиодные',
  'Светодиодные с пультом'
];

// Данные для бейджей
const badges = [
  { 
    id: "1", 
    text: "Новинка", 
    type: "blue",
    img: "car", // Используем car.png для новинки
    modalData: {
      title: "Новинка",
      description: "Этот товар является новинкой в нашем каталоге. Мы рады представить вам самые свежие и актуальные модели.",
      image: "/images/modal-images/modal_img_3.png"
    }
  },
  { 
    id: "2", 
    text: "Гарантия 1 год", 
    type: "gray", 
    img: "shield",
    modalData: {
      title: "Гарантия 1 год",
      description: "На все наши товары предоставляется гарантия 1 год. Мы гарантируем качество и надежность каждого изделия.",
      image: "/images/modal-images/modal_img_1.png"
    }
  },
  { 
    id: "3", 
    text: "Оригинальный товар", 
    type: "gray", 
    img: "or",
    modalData: {
      title: "Оригинальный товар",
      description: "Мы предлагаем только оригинальные товары от производителей. Никаких подделок и копий.",
      image: "/images/modal-images/modal_img_0.png"
    }
  },
  { 
    id: "4", 
    text: "Бесплатная доставка", 
    type: "gray", 
    img: "car",
    modalData: {
      title: "Бесплатная доставка",
      description: "Доставка по всей России бесплатно при заказе от определенной суммы. Быстрая и надежная доставка.",
      image: "/images/modal-images/modal_img_2.png"
    }
  },
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  // Небольшая задержка для полной загрузки Swiper
  setTimeout(() => {
    initializeSwiper();
  }, 100);
  
  initializeFAQ();
  initializePopularTags();
  initializeModal();
  initializeBadgeClicks();
  initializeCharacteristicsToggle();
});

// Инициализация Swiper
function initializeSwiper() {
  // Ждем загрузки Swiper
  if (typeof Swiper === 'undefined') {
    console.error('Swiper не загружен');
    return;
  }

  try {
    // Инициализация слайдера миниатюр
    const thumbsSwiper = new Swiper('.thumbs-swiper', {
      direction: 'vertical',
      spaceBetween: 12,
      slidesPerView: 4,
      watchSlidesProgress: true,
      freeMode: true,
      loop: false,
    });

    // Инициализация основного слайдера
    const mainSwiper = new Swiper('.main-swiper', {
      loop: false,
      thumbs: {
        swiper: thumbsSwiper
      },
      pagination: {
        el: '.mobile-pagination',
        clickable: true,
      },
      spaceBetween: 20,
    });

    // Обработчики для кнопок навигации
    const prevButton = document.getElementById('prevThumb');
    const nextButton = document.getElementById('nextThumb');

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        thumbsSwiper.slidePrev();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        thumbsSwiper.slideNext();
      });
    }

    console.log('Swiper инициализирован успешно');
  } catch (error) {
    console.error('Ошибка инициализации Swiper:', error);
  }
}

// Рендеринг характеристик
function renderCharacteristics() {
  const container = document.getElementById('characteristics');
  let isExpanded = false;
  let isMobile = window.innerWidth < 1024;

  function checkMobile() {
    isMobile = window.innerWidth < 1024;
  }

  function toggleExpanded() {
    isExpanded = !isExpanded;
    renderCharacteristicsContent();
  }

  function renderCharacteristicsContent() {
    container.innerHTML = '';
    
    sections.forEach((section, index) => {
      const sectionDiv = document.createElement('div');
      sectionDiv.className = 'mb-6';
      
      if (isMobile && !isExpanded && index > 0) {
        sectionDiv.classList.add('hidden');
      }

      sectionDiv.innerHTML = `
        <h3 class="lg:text-xl text-[15px] font-semibold mb-3">${section.title}</h3>
        <ul class="space-y-2">
          ${section.characters.map(character => `
            <li class="flex justify-between items-center max-lg:text-xs">
              <span class="text-gray-600">${character.name}</span>
              <div class="flex-1 mx-1 border-b border-dotted border-gray-300 -mb-2"></div>
              <div class="flex items-center gap-2">
                <span class="text-gray-900">${character.value}</span>
                ${character.link ? '<a href="#" class="text-blue-500 hover:underline">ссылка</a>' : ''}
              </div>
            </li>
          `).join('')}
        </ul>
      `;
      
      container.appendChild(sectionDiv);
    });

    // Добавляем кнопку для мобильной версии
    if (isMobile) {
      const button = document.createElement('button');
      button.className = 'max-lg:text-xs py-2 px-10 flex lg:hidden border-2 border-[#FFDD00] rounded-[10px] w-full justify-center items-center';
      button.textContent = isExpanded ? 'Свернуть характеристики' : 'Развернуть характеристики';
      button.addEventListener('click', toggleExpanded);
      container.appendChild(button);
    }
  }

  renderCharacteristicsContent();
  window.addEventListener('resize', checkMobile);
}

// Инициализация FAQ
function initializeFAQ() {
  const faqButtons = document.querySelectorAll('.faq-button');
  
  faqButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('svg');
      
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        // Меняем иконку на минус
        icon.innerHTML = '<path d="M0 1.75488L17.5 1.75488" stroke="#808080" stroke-width="2"></path>';
      } else {
        content.style.display = 'none';
        // Меняем иконку на плюс
        icon.innerHTML = '<path d="M8.745 0V17.5M0 8.755L17.5 8.755" stroke="#808080" stroke-width="2"></path>';
      }
    });
  });
}

// Инициализация популярных тегов
function initializePopularTags() {
  const popularLinks = document.querySelectorAll('.popular-tag');
  let activeIndex = 0;

  popularLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Убираем активный класс у всех ссылок
      popularLinks.forEach(l => {
        l.style.backgroundColor = '#F2F4F7';
        l.style.color = '#344054';
      });
      
      // Добавляем активный класс к выбранной ссылке
      this.style.backgroundColor = '#FFE81D';
      this.style.color = '#101828';
      
      activeIndex = index;
    });
  });
}

// Инициализация модального окна
function initializeModal() {
  const modal = document.querySelector('.modal-overlay');
  
  if (!modal) {
    console.error('Модальное окно не найдено');
    return;
  }
  
  const closeModal = modal.querySelector('.modal-close');
  const modalButton = modal.querySelector('.modal-button');

  function closeModalFunction() {
    modal.style.display = 'none';
  }

  closeModal.addEventListener('click', closeModalFunction);
  modalButton.addEventListener('click', closeModalFunction);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModalFunction();
    }
  });

  // Делаем функцию открытия модального окна глобальной
  window.openModal = function(title, description, image) {
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalImage = modal.querySelector('.modal-image');
    
    if (modalTitle) modalTitle.textContent = title;
    if (modalDescription) modalDescription.textContent = description;
    if (modalImage) modalImage.src = image;
    modal.style.display = 'flex';
  };
}

// Инициализация кликов по бейджам
function initializeBadgeClicks() {
  // Добавляем обработчики для всех бейджей
  const badgeElements = document.querySelectorAll('[data-badge]');
  
  badgeElements.forEach(element => {
    element.addEventListener('click', function() {
      const badgeId = this.getAttribute('data-badge');
      const badge = badges.find(b => b.id === badgeId);
      
      if (badge && badge.modalData) {
        openModal(badge.modalData.title, badge.modalData.description, badge.modalData.image);
      }
    });
  });

  // Добавляем обработчики для бейджей в HTML
  const allBadges = document.querySelectorAll('.badge-item');
  allBadges.forEach((badge, index) => {
    badge.addEventListener('click', function() {
      // Находим соответствующий бейдж по тексту
      const badgeSpan = this.querySelector('span');
      if (!badgeSpan) return;
      
      const badgeText = badgeSpan.textContent;
      const matchingBadge = badges.find(b => b.text === badgeText);
      
      if (matchingBadge && matchingBadge.modalData) {
        openModal(matchingBadge.modalData.title, matchingBadge.modalData.description, matchingBadge.modalData.image);
      } else {
        console.log('Бейдж не найден или нет данных модального окна:', badgeText);
      }
    });
  });
}

// Инициализация переключения характеристик на мобильных
function initializeCharacteristicsToggle() {
  const toggleButton = document.querySelector('button.max-lg\\:text-xs.py-2.px-10.flex.lg\\:hidden');
  const characteristicsContainer = document.querySelector('.flex.lg\\:gap-y-12.lg\\:gap-x-\\[150px\\].flex-wrap.flex-col');
  
  if (toggleButton && characteristicsContainer) {
    let isExpanded = false;
    
    toggleButton.addEventListener('click', function() {
      const sections = characteristicsContainer.querySelectorAll('.mb-6');
      
      if (!isExpanded) {
        // Показываем все секции
        sections.forEach((section, index) => {
          if (index > 0) {
            section.style.display = 'block';
          }
        });
        this.textContent = 'Свернуть характеристики';
        isExpanded = true;
      } else {
        // Скрываем секции кроме первой
        sections.forEach((section, index) => {
          if (index > 0) {
            section.style.display = 'none';
          }
        });
        this.textContent = 'Развернуть характеристики';
        isExpanded = false;
      }
    });
  }
}
