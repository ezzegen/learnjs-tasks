/* 2.
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();

Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/
'use strict'

const Person = function (name) {
    this.name = name
}

let person = new Person('Anna');

let person2 = new person.constructor('Helen');

console.log(person2.name)
console.log(Person.prototype.constructor == Person) // прототип не менялся, поэтому свойство работает.

const Person2 = function (name) {
    this.name = name
}
Person2.prototype = {}

let person3 = new Person2('Anna');

let person4 = new person3.constructor('Helen');

console.log(person4.name)
console.log(Person2.prototype.constructor == Person2)