/* 2.
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
*/
'use strict'

function Calculator() {
    this.read = function () {
        this.num1 = +prompt('Введите 1-ое число', 0);
        this.num2 = +prompt('Введите 2-ое число', 0);
    };
    this.sum = function () {
        return this.num1 + this.num2;
    };
    this.mul = function () {
        return this.num1 * this.num2;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());