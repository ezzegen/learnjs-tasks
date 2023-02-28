/* 5.
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

*/
'use strict'

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

