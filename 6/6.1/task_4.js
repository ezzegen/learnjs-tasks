/* 1.
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек).
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
*/
'use strict'

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// 1 вариант. 

function printList(lst) {
    let sublst = lst;

    while (sublst) {
        console.log(sublst.value);
        sublst = sublst.next;
    }
}

printList(list)
console.log()

// 2 вариант 

function printList2(lst) {

    console.log(lst.value);

    if (lst.next) {
        printList(lst.next);
    }
}

printList2(list)

