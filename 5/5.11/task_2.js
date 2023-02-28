/* 2.
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
«ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/
'use strict'

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(dateObj) {

    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return week[dateObj.getDay()];
}

console.log(getWeekDay(date));  