// Находим кнопку и меню по классам
const menuToggle = document.querySelector('.menuToggle');
const menuBtn = document.querySelector('.menu-btn');
const body = document.body;

// Вешаем событие на кнопку
menuBtn.addEventListener('click', () => {
  // Переключаем класс "open" у меню
  menuToggle.classList.toggle('menuToggle_active');
  body.classList.toggle('no-scroll');
});
