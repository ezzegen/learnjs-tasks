/* 1. Добавьте всем функциям в прототип метод defer(ms),
который вызывает функции через ms миллисекунд.

После этого должен работать такой код:
*/

function f() {
    console.log("Hello!");
}

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
}

f.defer(1000); // выведет "Hello!" через 1 секунду