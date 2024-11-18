'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('.button-one');



let isExpanded = false; // Переменная для отслеживания состояния

btn.addEventListener('click', () => {
  if (isExpanded) {
    // Сворачиваем текст
    box.style.height = '100px'; // Или установите высоту в исходные размеры
  } else {
    // Разворачиваем текст
    box.style.height = box.scrollHeight + 'px';
  }
  isExpanded = !isExpanded; // Переключаем состояние

  // 	// посмотреть сколько пролистано текста при скроле
  // 	// console.log(box.scrollTop);
});

// Получение всех координат бокса. метод:
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

// получение информации о имеющихся стилей на элементе

const sTyl = window.getComputedStyle(box);
console.log(sTyl.display);

// ============================================================

// работа с виндов и дркумент, определение сколько пролистано всего вьюпорта
console.log(document.documentElement.scrollTop);
console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.scrollTop = 0);



// работа со скролом виндовс window.scrollTo со всей страницей. window.scrollBy от текущего положения
window.scrollBy(0, 440);
window.scrollTo(0, 440);




