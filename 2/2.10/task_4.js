/* 4.
 Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
 */

let result;

let a = 1,
  b = 2;

(a + b < 4)
  ? result = 'Мало'
  : result = 'Много';

console.log(result) // Мало
