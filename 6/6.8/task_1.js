/* 1.
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/
'use strict'

// 1 вариант.
function printNumbers(from, to) {
    let currentNum = () => (from <= to) ? console.log(from++) : clearInterval(timer);
    let timer = setInterval(currentNum, 1000);
}
// printNumbers(5, 10);

// 2 вариант.
function printNumbers2(from, to) {
    let currentNum = from;
    let timer = setTimeout(function tick() {
        if (currentNum <= to) {
            console.log(currentNum++);
            setTimeout(tick, 1000)
        }
    }, 1000)
}

// printNumbers2(5, 10);
