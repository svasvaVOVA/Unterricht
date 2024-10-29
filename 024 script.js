/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания,   перемещаю эту функцию в const perSon код нижу, приводя к продвинатому формату.
// let filMs;
// function start() {
// 	filMs = +prompt('сколько фильмов вы посмотрели?', '');
// 	while (filMs == '' || filMs == null || isNaN(filMs)) {
// 		filMs = +prompt('сколько фильмов вы посмотрели?', '');
// 	}
	
// }

// start()


// function reMb() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('Один из последних просмотренных фильмов', ''),
// 			b = prompt('На сколько оцениваеш его', '');
		
// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			perSon.movies[a] = b;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }


// function otvet() {
// 	if (perSon.count < 10) {
// 		console.log('Просмотренно мало фильмов');
// 	} else if (perSon.count >= 10) {
// 		console.log('Вы класс зритель');
// 	} else if (perSon.count >= 30) {
// 		console.log('Вы киноман');
// 	} else {
// 		console.log('erro');
// 	}
// }

// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(perSon);
		
// 	};
// }
// функция по запоминанию всех жанров
// function writeZ() {
// 	for (let i = 1; i <= 3; i++){
// 		perSon.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
// 	}
// }


const perSon = {
	count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: ()=> {
    perSon.count = +prompt('сколько фильмов вы посмотрели?', '');
    while (perSon.count == '' || perSon.count == null || isNaN(perSon.count)) {
      perSon.count = +prompt('сколько фильмов вы посмотрели?', '');
	  };
	},
  	  reMb: ()=> {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов', ''),
			b = prompt('На сколько оцениваеш его', '');
		
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			perSon.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
				};
	},
			fotvet: ()=> {
	if (perSon.count < 10) {
		console.log('Просмотренно мало фильмов');
	} else if (perSon.count >= 10) {
		console.log('Вы класс зритель');
	} else if (perSon.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('erro');
				};
	},
	showMyDB: (hidden) => {
		if (!hidden) {
			console.log(perSon);
		
		};
	},
	// метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. база просматривается или нет
	toggleVisibleMyDB: function () {
		if (perSon.privat) {
			perSon.privat = false;
		} else {
			perSon.privat = true;
		}
	},
writeZ: ()=> {
	for (let i = 1; i <= 3; i++){
		perSon.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
	};
}

};
// perSon.start();
// perSon.reMb();
// perSon.fotvet();
// perSon.showMyDB();
// perSon.writeZ();

