'use strict';
const logsS = function (a, b, ...rest) {
	console.log(a, b, rest);
	
}
logsS('basic', 'rest', 'ojjj', 'usage');

function calcO(numb, basis = 2) {
	console.log(numb*basis);
	
}

// calcO(3, 7);
calcO(3);

// ===============JSON+++++++++++++++++

const person = {
	nsme: 'Alex',
	alt: '10',
};

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

// Глубокое клонирование обьекта с помощью JSON

const toP = {
  nsme: 'Alex',
	alta: '10',
	parents: {
		mom: 'OK',
		tel: '+78888'
	}
};

const cLon = JSON.parse(JSON.stringify(toP));

cLon.parents.mom = 'ANNNNA';
console.log(toP);
console.log(cLon);

