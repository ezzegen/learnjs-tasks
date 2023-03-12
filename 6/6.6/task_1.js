/* 1.
Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.
*/
'use strict'

function makeCounter() {
    let count = 0

    function counter() {
        return count++;
    }
    counter.set = (value) => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter.set(12));
console.log(counter.decrease());
console.log(counter.decrease());
