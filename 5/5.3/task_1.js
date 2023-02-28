// 1. Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
'use strict'

const ucFirst = (str) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('вася'));