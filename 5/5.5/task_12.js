/* 12.
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий
только уникальные элементы arr.
*/
'use strict'

function unique(arr) {
    return arr.filter((elem, idx) => idx === arr.indexOf(elem));
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O