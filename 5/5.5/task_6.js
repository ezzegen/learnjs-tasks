/* 6.
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.

1. Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
Метод должен понимать плюс + и минус -.

2. Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
*/
'use strict'

function Calculator(a, b) {

    this.calcFunctions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.calculate = function (str) {
        let arrStr = str.split(' ');
        if (isFinite(arrStr[0]) && isFinite(arrStr[2])) {
            return this.calcFunctions[arrStr[1]](+arrStr[0], +arrStr[2])
        };
        return 'Проверьте введенные данные!'
    };

    this.addMethod = function (name, func) {
        this.calcFunctions[name] = func
    };
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8