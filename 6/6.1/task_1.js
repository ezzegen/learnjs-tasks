/* 1.
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Сделайте три варианта решения:

1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии.
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
*/
'use strict'

// 1 вариант
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}

console.log(sumTo(10000));

// 2 вариант
function sumTo2(n) {
    if (n == 1) return 1;
    return n + sumTo2(n - 1);
}

console.log(sumTo2(10000));

// 3 вариант
function sumTo3(n) {
    let sum = n * (n + 1) / 2;
    return sum;
}

console.log(sumTo3(10000));

console.log(`1) 3 вариант быстрее, т.к. всего 3 арифметические операции.\n2) нельзя, будет ошибка RangeError: Maximum call stack size exceeded.`);
