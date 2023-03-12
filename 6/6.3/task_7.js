/* 7. 
Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
*/

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () { // функция shooter
            console.log(i); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
console.log('Ответ: переменная i объявлена за пределами цикла while. Чтоб функция работала верно, нужно поместить переменную i в лексическое окружение цикла (заменить while на for).')