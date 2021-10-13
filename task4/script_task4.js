/*
Дополнить нашу программу по видео.

1) Оформить расчет дневного бюджета  и вывод на экран этого значения
как одну функцию (detectDayBudget)

2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)


3) Создать функцию для определения необязательных расходов (chooseOptExpenses):

Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”

Записать ответы в объект optionalExpenses в формате Номер - Ответ.

    optionalExpenses: {
    1 : “ответ на вопрос”
    }

Вызывать функции не обязательно.

4) Добавить папку с третьим уроком на GitHub
Вопросы к этому заданию

Что значит () после названия функции?

 */

'use strict';

let money, time;

function start() {
     money = +prompt('Ваш бюджет на месяц?','');
     time = prompt('Введите дату в формате YYYY-MM-DD','');

     while(isNaN(money) || money == '' || money == null) {
         money = +prompt('Ваш бюджет на месяц?','');
     }
}
start();


let appData = {
    budget: money, //  бюджет (передаем сюда переменную из п.2)
    timeData: time,//  данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, // объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: true // сбережения
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let subjectOfExpense = prompt('Введите обязательную статью расходов в этом месяце',''),
            amountOfExpense = +prompt('Во сколько обойдется?','');

        if (typeof(subjectOfExpense) === 'string' && typeof (subjectOfExpense) != null
            && typeof (amountOfExpense) != null
            && subjectOfExpense != '' && subjectOfExpense.length < 50) {
            console.log ('done');
            appData.expenses[subjectOfExpense] = amountOfExpense;
        } else {
            alert('Недопутимые значения. Повторите ввод!');
            --i;
        }
    }

}
chooseExpenses();

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

// let i = 0;
// do {
//     i++;
//     let subjectOfExpense = prompt('Введите обязательную статью расходов в этом месяце',''),
//         amountOfExpense = +prompt('Во сколько обойдется?','');
//
//     if (typeof(subjectOfExpense) === 'string' && typeof (subjectOfExpense) != null
//         && typeof (amountOfExpense) != null
//         && subjectOfExpense != '' && subjectOfExpense.length < 50
//     ) {
//         console.log ('done');
//         appData.expenses[subjectOfExpense] = amountOfExpense;
//     } else {
//         alert('Недопутимые значения. \n Повторите ввод!');
//         --i;
//     }
// } while (i < 2);

appData.moneyPerDay = (appData.budget / 30).toFixed();

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

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

