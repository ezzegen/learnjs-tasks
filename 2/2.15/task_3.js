// 3. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
'use strict'

function min(num1, num2) {
    return (num1 > num2) ? num2 : num1;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
console.log(min(6, -5));