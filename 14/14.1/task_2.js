/* 2.
В некоторых языках программирования возможно получать элементы массива,
используя отрицательные индексы, отсчитываемые с конца.
Создайте прокси, который реализовывал бы такое поведение.
*/
'use strict'

let array = [1, 2, 3];

array[-1]; // 3, последний элемент
array[-2]; // 2, предпоследний элемент
array[-3]; // 1, за два элемента до последнего

console.log(array.at(-1)) // Можно и так.

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }
        return Reflect.get(target, prop, receiver);
    }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// вся остальная функциональность массивов должна остаться без изменений
