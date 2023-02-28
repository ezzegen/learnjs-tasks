/* 3.
В Европейских странах неделя начинается с понедельника (день номер 1),
затем идёт вторник (номер 2) и так до воскресенья (номер 7).
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
*/
'use strict'

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay(dateObj) {
    return dateObj.getDay() || 7;
}

console.log(getLocalDay(date));       // вторник, нужно показать 2