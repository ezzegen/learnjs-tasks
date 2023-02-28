/* 6.
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

Функция должна работать в любой день, т.е. в ней не должно быть конкретного
значения сегодняшней даты.
*/
'use strict'

function getSecondsToday() {
    let dateNow = new Date();
    let dateToday = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());

    return Math.round((dateNow - dateToday) / 1000);
}

console.log(getSecondsToday());
