'use strict';

function first(){
    //что-то делаем
    setTimeout( function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, notacallback) {
    console.log('Я учу ' + lang);
    notacallback();
}

function done() {
    console.log('Я прошел 3 урок')
}

learnJS('javascript',done);