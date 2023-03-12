/* 1.
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?
*/

let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // Ответ: true, т.к. свойство есть в самом объекте rabbit

delete rabbit.jumps;

alert(rabbit.jumps); // Ответ: null, т.к. свойство в rabbot было удалено и вывелось унаследованное свойство.

delete animal.jumps;

alert(rabbit.jumps); // Ответ: undefined, свойства нет ни в rabbit, ни в animal.