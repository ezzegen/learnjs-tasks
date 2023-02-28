/* 5.
У нас есть массив строк arr. Нужно получить отсортированную копию,
но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/
'use strict'

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
    let newArray = array.slice()
    newArray.sort();
    return newArray;
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)