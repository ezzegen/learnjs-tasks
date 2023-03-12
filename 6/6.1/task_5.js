/* 5.
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
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

// 1 вариант

function printReverseList(lst) {
    let arr = [];
    let sublst = lst;

    while (sublst) {
        arr.push(sublst.value);
        sublst = sublst.next;
    }

    for (let i of arr.sort((a, b) => b - a)) {
        console.log(i);
    }
}

printReverseList(list);
console.log();

// 2 вариант

function printReverseList2(lst) {
    if (lst.next) {
        printReverseList2(lst.next)
    }

    console.log(lst.value);
}

printReverseList2(list);
