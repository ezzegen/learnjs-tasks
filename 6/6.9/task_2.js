/* 2.
Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

*/
'use strict'

function f(str) {
    console.log(str)
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 3000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
