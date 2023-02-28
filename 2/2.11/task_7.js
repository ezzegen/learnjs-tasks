/* 7.
Напишите условие if для проверки, что значение переменной age
НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

// 1 вариант

'use strict'

let age

const ageControl = (numAge) => {
    if (!(numAge >= 14 && numAge <= 90)) {
        return true
    }
    return false
}

age = 91;
console.log(ageControl(age)); //true

age = 14;
console.log(ageControl(age)); //false

age = 13;
console.log(ageControl(age)); //true

age = 90;
console.log(ageControl(age)); //false

// 2 вариант

const ageControl2 = (numAge) => {
    if (numAge < 14 || numAge > 90) {
        return true
    }
    return false
}

age = 91;
console.log(ageControl2(age)); //true

age = 14;
console.log(ageControl2(age)); //false

age = 13;
console.log(ageControl2(age)); //true

age = 90;
console.log(ageControl2(age)); //false