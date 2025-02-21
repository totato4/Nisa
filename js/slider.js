class Slider {
  constructor(container) {
    this.container = document.querySelector(container);
    this.slides = Array.from(this.container.querySelectorAll('.review_slide'));
    this.currentIndex = 0;
    this.autoPlayInterval = null;

    // Инициализация
    // this.createIndicators();
    this.addEventListeners();
    this.showSlide(this.currentIndex);
  }

  showSlide(index) {
    // Проверка границ
    if (index < 0) index = this.slides.length - 1;
    if (index >= this.slides.length) index = 0;

    // Обновление слайдов
    this.slides.forEach((slide) => slide.classList.remove('active-slide'));
    this.slides[index].classList.add('active-slide');

    // Обновление индикаторов
    // const indicators = this.container.querySelectorAll('.indicators span');
    // indicators.forEach((ind) => ind.classList.remove('active-slide'));
    // indicators[index].classList.add('active-slide');

    // this.currentIndex = index;
  }

  nextSlide() {
    this.showSlide(this.currentIndex + 1);
    console.log('NEXT NEXT');
  }

  prevSlide() {
    this.showSlide(this.currentIndex - 1);
  }

  //   createIndicators() {
  //     const indicatorsContainer = this.container.querySelector('.indicators');
  //     this.slides.forEach((_, i) => {
  //       const indicator = document.createElement('span');
  //       indicator.addEventListener('click', () => this.showSlide(i));
  //       indicatorsContainer.appendChild(indicator);
  //     });
  //   }

  addEventListeners() {
    // Кнопки вперед/назад
    this.container
      .querySelector('.review_btn_next')
      .addEventListener('click', () => this.nextSlide());
    this.container
      .querySelector('.review_btn_prev')
      .addEventListener('click', () => this.prevSlide());

    // Автоплей при наведении
    this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.container.addEventListener('mouseleave', () => this.startAutoPlay());

    // Старт автоплея
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.nextSlide(), 3000);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }
}

// Инициализация слайдера
new Slider('.review_slider_container');
