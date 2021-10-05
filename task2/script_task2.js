// Дописать нашу программу по видео.
//
// 1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)
//
// 2) Проверить, чтобы все работало и не было ошибок в консоли
//
// 3) Добавить папку со вторым уроком в свой репозиторий на GitHub
//
// Вопросы к этому заданию
// Сколько видов циклов существует в JS?

/* ВОПРОСЫ:
1) Правильно ли я сделал откат цикла на шаг назад через декремент --i?
2) В строках 90-98 не лучше использовать switch?
 */

'use strict';
const money = +prompt('Ваш бюджет на месяц?',''),
    time = prompt('Введите дату в формате YYYY-MM-DD','');


var appData = {
    budget: money, //  бюджет (передаем сюда переменную из п.2)
    timeData: time,//  данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, // объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: false // сбережения
};



// for (let i = 0; i < 2; i++) {
//     let subjectOfExpense = prompt('Введите обязательную статью расходов в этом месяце',''),
//         amountOfExpense = +prompt('Во сколько обойдется?','');
//
//     if (typeof(subjectOfExpense) === 'string' && typeof (subjectOfExpense) != null
//         && typeof (amountOfExpense) != null
//         && subjectOfExpense != '' && subjectOfExpense.length < 50) {
//     console.log ('done');
//     appData.expenses[subjectOfExpense] = amountOfExpense;
// } else {
//         alert('Недопутимые значения. Повторите ввод!');
//         --i;
//     }
//
// }

//var i =0;
// while ( i < 2 ) {
//     let subjectOfExpense = prompt('Введите обязательную статью расходов в этом месяце',''),
//          amountOfExpense = +prompt('Во сколько обойдется?','');
//     i++;
//      if (
//          typeof(subjectOfExpense) === 'string' && typeof (subjectOfExpense) != null
//          && typeof (amountOfExpense) != null
//          && subjectOfExpense != '' && subjectOfExpense.length < 50
//      ) {
//      console.log ('done');
//      appData.expenses[subjectOfExpense] = amountOfExpense;
//
// } else {
//         alert('Недопутимые значения. Повторите ввод!');
//         --i;
//     }
//     };

var i = 0;
do {
    i++;
    let subjectOfExpense = prompt('Введите обязательную статью расходов в этом месяце',''),
        amountOfExpense = +prompt('Во сколько обойдется?','');

    if (typeof(subjectOfExpense) === 'string' && typeof (subjectOfExpense) != null
        && typeof (amountOfExpense) != null
        && subjectOfExpense != '' && subjectOfExpense.length < 50
    ) {
        console.log ('done');
        appData.expenses[subjectOfExpense] = amountOfExpense;
    } else {
        alert('Недопутимые значения. \n Повторите ввод!');
        --i;
    }
} while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert ('Ваш бюджет на 1 день: ' + appData.moneyPerDay);// Вывожу полученное значение бюджета на 1 день

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка')
} else if (appData.moneyPerDay > 2000) {
    console.log ('Высокий уровень достатка')
} else {
    console.log ('Произошла ошибка')
} // Проверка на уровень дохода
