/* 1.
Создайте калькулятор, который запрашивает ввод какого-нибудь арифметического выражения и
возвращает результат его вычисления.
В этой задаче нет необходимости проверять полученное выражение на корректность,
просто вычислить и вернуть результат
*/

const calculator = (a, b) => eval('a + b')

console.log(calculator(2, 2));
console.log(calculator(322, 434242));