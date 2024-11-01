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

hearts.forEach(function (item, is, hearts) {
  item.style.backgroundColor = 'blue';
  //  is[1].style.backgroundColor = 'blue';
});
// document.body.append(div);

document.querySelector('.wrapper').append(p);
const wrap = document.querySelector('.wrapper');
wrap.prepend(div);
hearts.before(div);
hearts.after(div);

circles[0].remove();
