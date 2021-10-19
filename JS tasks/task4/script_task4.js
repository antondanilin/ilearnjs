/*
Дополнить свою программу по видео

1) Написать проверку, что пользователь может:

·        Ввести в дополнительных доходах (chooseIncome) только строку

·        Не может оставить строку пустой

·        Не может отменить вопрос

2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка:
" и полученные способы (внутри chooseIncome)

·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные:
" (вывести весь appData)

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком на свой GitHub
Вопросы к этому заданию

Как перебрать свойства объекта?

ВОПРОСЫ:

1) Как проверить, что в доп. доходах пользователь не ввел строку? Проверять на строке или уже массиве разбитом?
*/

'use strict';

let money,
    time;

let appData = {
    budget: money, //  бюджет (передаем сюда переменную из п.2)
    timeData: time,//  данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, // объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: true,// наличие сбережений
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let subjectOfExpense = prompt('Введите обязательную статью расходов в этом месяце', ''),
                amountOfExpense = +prompt('Во сколько обойдется?', '');

            if (typeof (subjectOfExpense) === 'string' && typeof (subjectOfExpense) != null
                && typeof (amountOfExpense) != null
                && subjectOfExpense != '' && subjectOfExpense.length < 50) {
                console.log('done');
                appData.expenses[subjectOfExpense] = amountOfExpense;
            } else {
                alert('Недопутимые значения. Повторите ввод!');
                --i;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ('Ваш бюджет на 1 день: ' + appData.moneyPerDay);// Вывожу полученное значение бюджета на 1 день
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка')
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка')
        } else {
            console.log('Произошла ошибка')
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            appData.optionalExpenses[i+1] = prompt('Статья необязательных расходов');
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while (items === '' ||
        +items > 0 || items == null) {
            items = prompt(`Что принесет дополнительный доход? (Перечислите через запятую)`, '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        appData.income.forEach(function (item,i, mass ) {
            alert('Способы доп. заработка: ' + (i+1) + ' ' + item);
        })
    },
    //Получает список статей доп. доходов и выводит их поочередно на экран

    showObjectInfo: function () {
        console.log('Наша программа включает в себя данные:');
        for (let key in appData) {
            console.log('Св-во ' + key + ' Принимает значение ' + appData[key]);
        }
    }
};

function start() {
     let money = +prompt('Ваш бюджет на месяц?',''),
        time = prompt('Введите дату в формате YYYY-MM-DD','');

     while(isNaN(money) || money == '' || money == null) {
         money = +prompt('Ваш бюджет на месяц?','');
     }
}
start();

appData.showObjectInfo();

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
