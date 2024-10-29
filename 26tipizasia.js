'uese strict'

// перевод значений ы строку

// To String

console.log(typeof (String(null)));
// 2
console.log(typeof(null + ''));

// 3
const num = 5;
console.log('http://vk.com/catalog/' + num);


// первевод стилей в строку в процессе написания кода js
const fontSize = 26 + 'px';

// Nгьber Перевод в число====================
console.log(typeof (Number('5')));

// 2
console.log(typeof (+'5'));
//3
console.log(typeof (parseInt('15', 10)));

// let a = + prompt("2");
// ===============================================================================
// To boolean  folss = 0, '', null, undefined, NaN;
// true  все остальные

let sW = null; //null  это ничего
if (sW) {
	console.log('ok');
};

sW = 1;

if (sW) {
  console.log('ok');
};

//2
console.log(typeof (Boolean('4')));
//3
console.log(typeof(!!"4444"));




