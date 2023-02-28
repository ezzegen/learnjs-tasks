/* 2.
Есть массив сообщений такой же, как и в предыдущем задании.

Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать
для хранения информации о том, когда сообщение было прочитано?

В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет».
Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении
«сборщиком мусора» сообщения.
*/
'use strict'

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakMap();

readMessages.set(messages[0], new Date('2023-02-23'));
console.log(readMessages.has(messages[0]));

messages[0] = null;
console.log(readMessages.has(messages[0]))

