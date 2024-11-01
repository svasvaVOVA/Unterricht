'use strict';

const as = document.getElementById('box');

const btn = document.getElementsByTagName('button');
const btns = document.getElementsByTagName('button')[1];

const circles = document.getElementsByClassName('circle');
// ============================

const hearts = document.querySelectorAll('.heart');

const oneHeart = document.querySelector('.heart');

// as.style.backgroundColor = 'blue';
// box.style.width = '500px';
// let nam = 800;
// as.style.cssText = 'background-color: blue; width: 500px';
// as.style.cssText = `background-color: blue; width: ${nam}px`;
// ======================================================================

btn[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }
// ========================================================

hearts.forEach(function (item) {
  item.style.backgroundColor = 'blue';
 
});

const div = document.createElement('div');
div.classList.add('black');
// document.body.append(div);

// document.querySelector('.wrapper').append(div);
const wrap = document.querySelector('.wrapper');
// wrap.prepend(div);
hearts[0].before(div);
// hearts[0].after(div);

circles[0].remove();

// замена одного элемента другим
// hearts[0].replaceWith(circles[0]);
// ================================================================================================
// старые команды которые встреяаються в коде
wrap.appendChild(div)
// вставить вперед устаревший. 1 что вставляем, 2 куда перед каким элементом вставляем
wrap.insertBefore(div, hearts[0]);
// удаление. в скобках элемент который удалить
wrap.removeChild(hearts[1]);
// замена одного элемента другим/   устаревший вариант.
wrap.replaceChild(circles[0], hearts[0]);
// ======================================================================================================

div.innerHTML = 'Helo';
div.innerHTML = " <h1>OKKKK</h1>";
div.textContent = 'aaaaaaaa';
// вставить кусок HTML 
div.insertAdjacentHTML('beforebegin', ' <h2>ccccddd</h2>');
div.insertAdjacentHTML('afterbegin', ' <h2>ccccddd</h2>');
div.insertAdjacentHTML('afterend', ' <h2>ccccddd</h2>');
div.insertAdjacentHTML('beforeend', ' <h2>ccccddd</h2>');
