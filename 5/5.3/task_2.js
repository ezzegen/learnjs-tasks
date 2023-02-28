/* 2.
Напишите функцию checkSpam(str), возвращающую true, если str содержит
'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру.
*/
'use strict'

const checkSpam = (str) => {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now')) // true
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam("innocent rabbit")) // false