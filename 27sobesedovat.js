
'use strict'

let x = 5; alert(x++);
let xq = 5; alert(++xq);


//Получим NaN  так как это не матиематическоу значение. в первом сложении получается строка ФОЛС во втором NAN и в третьем NAN

[] + false - null + true;

let y = 1;
let xz = y = 2;
alert(xz);
//будет равно 2 это последовательное присваивание

// получим строку при контантенации так как массив является строкой 12
console.log([] + 1 + 2);
console.log(typeof ([] + 1 + 2));

// Единица в данном случаи имеет код строки ноль, а  в скобкач и указан ее код по порядку.Выведен будет результат 1;

alert('1'[0]);

// Оператор проверяет ложно или нет, занчение 2 и 1 верны они существуют значение null не существует значет на нем остановиться и будет выведен null
console.log(2 && 1 && null && 8 && undefined);

// два знака !! превращают значение в буливое, а значит эти два варианта не равны
console.log(!!(1 && 2) === (1 && 2));

// ОПЕРАТОР ИЛИ ЗАПИНАЕТСЯ на правде
                       //3
alert(null || 2 && 3 || 4);

//  два массива с одинаковыми данными не равны друг другу.
const a = [1, 2, 3];
const b = [1, 2, 3];


// тип данных будет числовой
alert(+'infinity');

// сравнение идет по символам каждый символ имеет свой приоретет, для приорритетов ест таблицы символов ЮНИКОД
console.log("Ежик" > "яблоко");

// ОПЕРАТОР ИЛИ ЗАПИНАЕТСЯ на правде

                  //2
console.log(0||""||2||undefined||true||false);











