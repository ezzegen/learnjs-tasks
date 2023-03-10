/* 10.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может
быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого
случая.
*/
'use strict'

let arr = [1, 2, 3];

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        let newIdx = Math.floor(Math.random() * (i + 1));
        [array[i], array[newIdx]] = [array[newIdx], array[i]];
    };
}

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);
