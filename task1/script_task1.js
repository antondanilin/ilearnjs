'use strict';
var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    x = prompt("Введите обязательную статью расходов в этом месяце"),
    y = prompt ("Во сколько обойдется?")
    ;
// Создаю 2 переменные

var appData = {
    budget:        money,
    timeData:       time,
    expenses:         {mandatoryExpenseSubject: x, mandatoryExpenseAmount: y},     

    optionalExpenses: [],
    income:           [],
    savings:          false,

};

alert((money - expenses.mandatoryExpenseAmount) / 30);

