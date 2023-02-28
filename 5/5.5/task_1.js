/* 1.
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string»
в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/
'use strict'

function camelize(str) {
    let arr = str.split('-')
    /*for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }*/
    arr = arr.map(
        (elem, idx) => idx >= 1 ?
            elem = arr[idx][0].toUpperCase() + elem.slice(1) :
            elem
    );
    return arr.join('');
}

console.log(camelize("background-color")); //== 'backgroundColor'
console.log(camelize("list-style-image")); //== 'listStyleImage'
console.log(camelize("-webkit-transition")); //== 'WebkitTransition'