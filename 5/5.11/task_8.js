/* 8.
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно:
"день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/
'use strict'

function formatDate(date) {

    let formatting = (d) => ((d < 10) ? '0' + d : d); // функция для добавления нуля перед значением

    let diff = new Date() - date;

    let day = formatting(date.getDate());
    let month = formatting(date.getMonth() + 1);
    let year = formatting('' + date.getFullYear());
    let hour = formatting(date.getHours());
    let min = formatting(date.getMinutes());

    if (diff < 1000) {
        return "прямо сейчас";
    } else if (diff < 1000 * 60) {
        return `${diff / 1000} сек. назад`;
    } else if (diff < 1000 * 60 * 60) {
        return `${diff / (1000 * 60)} мин. назад`;
    } else {
        return `${day}.${month}.${year.slice(-2)}, ${hour}:${min}`;
    }
}



console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000)));