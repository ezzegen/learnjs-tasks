/* 
2.
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят console.log с одинаковыми значениями или нет?
*/

// Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert(i);
// 1, 2, 3, 4. В условии сравнение с новым значением, поэтому цикл прерывается, когда i = 5.

//Постфиксный вариант i++

i = 0;
while (i++ < 5) alert(i);
// 1, 2, 3, 4, 5. В условии сравнение с предыдущим значением, но вывод нового.