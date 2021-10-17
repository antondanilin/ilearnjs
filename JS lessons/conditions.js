'use strict';
// let person = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// let arr = ['plum.png', 'orange.jpg','apple.bmp']


// let answer = +prompt ("Are you 18?", "Yes")
// // console.log(typeof(зу))
// console.log(typeof(answer))
// console.log(arr + 'hvost')

// let incr = 10,
//     decr = 10;
//
// // incr++;
// // decr--;
//
// console.log(incr++);
// console.log(decr--);
//
// console.log(5%2);
// console.log("2" == 2);
// console.log("2" === 2);
//
// let isChecked = true,
//     isClosed = true;
//
// console.log(isChecked || isClosed)

let num = 50;

if(num < 49){
    console.log('not right')
} else if (num > 100) {
    console.log('too mych')
} else {
    console.log('verno!')
}
num ===  50 ? console.log ('Верно') : console.log('Неверно');

switch(num){
    case num < 49:
        console.log('not right');
        break;
    case num > 100:
        console.log('too much');
        break;
    case num > 80:
        console.log('still too much');
        break;
    case 50:
        console.log('RIGHT');
        break;
    default:
        console.log('Smth went wrong');
        break;
}

