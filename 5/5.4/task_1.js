//1. Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits; // переменная ссылается на один и тот же массив
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // 4