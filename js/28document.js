
'use strict'
const as = document.getElementById('box');
console.log(as);

const btn = document.getElementsByTagName('button');
const btnTwo = document.getElementsByTagName('button')[1];
console.log(btn);
console.log(btnTwo);
console.log(btn[2]);
const cLas = document.getElementsByClassName('circle');
// ============================

// перебераем массив
const herS = document.querySelectorAll('.heart');
console.log(herS);

herS.forEach(item => {
	console.log(item);
	
})

const etR = document.querySelector('.heart');
console.log(etR);
