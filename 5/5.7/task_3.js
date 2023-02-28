/* 3.
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними,
например, применить метод .push.

Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/
'use strict'

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // Ответ: нужно преобразовать Map Iterator в Array

keys.push("more");
console.log(keys);