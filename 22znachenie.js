'use strict';
let a = 5,
	b = a;
b = b + 5;
console.log(b);




const obj = {
	a: 5,
	b: 1
};
const copy = obj; //это ссылка
copy.a = 10;
console.log(copy);


// =============== копирование обьекта
function copy(mainO) {
	let obJCop = {  //созданиее обьекта
	}
	let key;
	for (key in mainO) {
		obJCop[key] = mainO[key];
	}

	return obJCop;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};


// let numbersCopy = copy(numbers);
// numbersCopy.a = 10;
// console.log(numbers);
// console.log(numbersCopy);




// соединение двух обьектов

const add = {
	d: 17,
	e: 20
};
// console.log(Object.assign(numbers, add));

const lTe = Object.assign({}, add);
lTe.d = 120;
console.log(lTe);
 
// копия массива
const zzA = ['a', 'b', 'c'];
const xxE = zzA.slice();
xxE[1] = 'rosi';
console.log(zzA);
console.log(xxE);

// еще метод

const vLo = ['a', 'e', 'sos'];
const xxTa = ['10', 23, 'zzz'];
const gotov = [...vLo, ...xxTa, 'nasch', 345];
console.log(gotov);


function sHrs(a, b, x) {
	console.log(a);
	console.log(b);
	console.log(x);
} 
const jN = [2, 4, 1];

sHrs(...jN);

// =============
const nsnd = ['l', 22];
const newK = [...nsnd];
// ==============

const gS = {
	s: 4,
	mn: 12
}


const fY = { ...gS };
fY.s ='llllld'
console.log(fY);


