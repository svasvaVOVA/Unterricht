'use strict';
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
	},
	//   создание метода с помощью функции
	makeTest: function () {
	  console.log('TEST');
  }
};
options.makeTest();
const { border, bg } = options.colors;

// delete options.name;
console.log(options);
// содержимое массива, длинна массива
console.log(Object.keys(options));
console.log(Object.keys(options).length);



// Как перебрать все свойства внутри обьекта если ключи известны

let counter = 0;
for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`свойство ${key} имеет значение ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`свойство ${key} имеет значение ${options[key]}`);
		counter++;
	}
	
	
}
console.log(counter);






