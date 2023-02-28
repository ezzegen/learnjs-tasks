/* 2.
Создайте функцию topSalary(salaries), которая возвращает имя самого
высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/
'use strict'

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Jena": 300,
};

let salaries2 = {};

function topSalary(salariesObj) {

    let maxSalary = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salariesObj)) {

        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}


console.log(topSalary(salaries));

console.log(topSalary(salaries2));
