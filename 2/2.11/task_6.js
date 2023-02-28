/* 6.
Напишите условие if для проверки, что переменная age находится в диапазоне
между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.
*/
'use strict'

let age

const ageControl = (numAge) => {
    if (numAge >= 14 && numAge <= 90) {
        return true
    }
    return false
}

age = 91;
console.log(ageControl(age)); //false

age = 14;
console.log(ageControl(age)); //true

age = 13;
console.log(ageControl(age)); //false

age = 90;
console.log(ageControl(age)); //true