/* 2.
Напишите функцию sum, которая бы работала следующим образом
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
*/
'use strict'

function sum(num) {
    let foo = num2 => sum(num + num2);

    foo.toString = () => num;

    return foo;
}

console.log(sum(1)(2) == 3);
console.log(sum(1)(2)(3) == 6);
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);
