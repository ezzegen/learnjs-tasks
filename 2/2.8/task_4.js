/* 4.
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12

 */


let a = +prompt("Первое число?", 1); // необходимо выполнить преобразования данных в числа, чтоб вычисление было правильным.
let b = +prompt("Второе число?", 2);

alert(a + b);