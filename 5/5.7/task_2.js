/* 2.
Анаграммы – это слова, у которых те же буквы в том же количестве,
но они располагаются в другом порядке.

Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/
'use strict'

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(array) {
    let wordMap = new Map();

    for (let word of array) {
        let sortedWord = word.toLowerCase().split("").sort().join('');
        wordMap.set(sortedWord, word);
    }

    return Array.from(wordMap.values());
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"