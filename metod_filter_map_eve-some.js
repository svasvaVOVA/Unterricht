'use strict';

const names = ['Ivan', 'Lecsys', 'Ira', 'Tolik'];
const sH = names.filter(function (name) {
	return name.length < 5;
});
console.log(sH);

// map==========================

const maPs = names.map(function (item) {
	return item.toLowerCase();
});
console.log(maPs);
// если хотябы один элемент равны числу true

const sTo = [4, 'Trrrrr', 'smex', 7];
const hislo = sTo.some(item => {
	return typeof(item) === 'number'
} );
console.log(hislo);
// если все элементы равны числу true
const eveR = sTo.every(item => {
	return typeof(item) === 'number'
} );
console.log(eveR);



const arr = [4, 5, 2, 8, 1];

const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

const arrT = ['sss', 'dddd', 'wwwww'];

const resT = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(resT);

// пример получения из обьекта имена персон из общего массива с последующим слеплениям нужных данных в один массив с помощью map
const obj = {
	ivan: 'person',
	anna: 'person',
	dog: 'Tire',
	katze: 'Tire'

};

const newObj = Object.entries(obj)
	.filter(item => item[1] === 'person')
	.map(item => item[0]);
console.log(newObj);
























