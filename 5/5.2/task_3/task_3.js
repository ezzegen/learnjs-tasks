/* 3.
Создайте функцию readNumber, которая будет запрашивать ввод числового
значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив
пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/
'use strict'

function readNumber() {
    let num;
    while (true) {
        num = prompt("Введите число", 0);
        if (!num) {
            return null;
        } else if (isFinite(num)) {
            return +num;
        }
    }
}

alert(`Число: ${readNumber()}`);