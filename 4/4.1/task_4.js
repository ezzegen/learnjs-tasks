/* 4.
У нас есть объект, в котором хранятся зарплаты нашей команды:

Напишите код для суммирования всех зарплат и сохраните результат
в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
 */
'use strict'

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let empty = {};

// 1 вариант. Через функцию.
const sumSalaries = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key]
    }
    return sum;
}

console.log(sumSalaries(salaries));
console.log(sumSalaries(empty));

// 2 вариант. Через встроенный метод объекта и функцию reduce.
let arraySalaries = Object.values(salaries);
let sum = arraySalaries.reduce((sum, current) => sum + current, 0);

console.log(sum);


