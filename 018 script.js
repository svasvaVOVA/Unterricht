/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
// const promTone = +prompt('skolko');
let promTone;
function start() {
  promTone = +prompt('сколько фильмов смотрел', '');
  while (promTone == '' || promTone == null || isNaN(promTone)) {
    promTone = +prompt('сколько фильмов смотрел 2', '');
  }
}
start();

const aMovie = {
  count: promTone,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
// console.log(aMovie);
function cikLocenka() {
  22;
  for (let i = 0; i < 2; i++) {
    const a = prompt('сколько фильмов смотрел 3q', ''),
      b = prompt('как оцениваеш', '');
    if (a != null && b !== null && a != '' && b != '' && a.length < 50) {
      aMovie.movies[a] = b;
      console.log('okaMovie');
    } else {
      i--;
    }
  }
}
// cikLocenka();

function dreiFunc() {
  if (aMovie.count < 10) {
    console.log('malo posmotrel');
  } else if (aMovie.count >= 10 && aMovie.count < 30) {
    console.log('norm video');
  } else if (aMovie.count >= 30) {
    console.log('ihr VIDIOMAN');
  } else {
    console.log('ERROR OF');
  }
}
// dreiFunc();


function showMyDB(a) {
  if (!a) {console.log('ok33333333');
	  console.log(aMovie);
	 
  } 
}
showMyDB(aMovie.privat);


function writeYourGenres() {
	for (let i = 1; i <= 3; i = i + 1){
		const gen = prompt(`Ваш любимый жанр под номером ${i}`);
		aMovie.genres[i - 1] = gen;
	}
}

 writeYourGenres();