/* 2.
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/
'use strict'

let schedule = {};

const isEmpty = (obj) => {
    if (!(Object.keys(obj).length)) {
        return true;
    }
    return false;
}

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false