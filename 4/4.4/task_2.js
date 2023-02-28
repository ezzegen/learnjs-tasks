/* 2.
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/
'use strict'

let calculator = {
    read() {
        this.num1 = +prompt('Введите 1-ое число', 0);
        this.num2 = +prompt('Введите 2-ое число', 0);
    },

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());