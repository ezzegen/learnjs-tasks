/* 6.
Напишите цикл, который предлагает prompt ввести число, большее 100.
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку
нечисловых строк в этой задаче необязательно.
*/
'use strict'

let num;

while (true) {
    num = prompt('Введите число больше 100', '')
    if (num > 100 || !(num)) {
        alert('Выход из программы.');
        break
    } else {
        alert('Вы не то ввели! Повторите попытку.');
        continue
    }
}
