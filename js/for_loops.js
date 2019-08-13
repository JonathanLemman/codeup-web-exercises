"use strict";




function showMultiplicationTable(num) {
    for(var i = 1; i <= 10; i++) {
        var multi = num * i;
        console.log(num + " x " + i + " = " + multi);
    }
}

showMultiplicationTable(7);


function tenRandomOddorEven() {
    for(var i = 1; i <= 10; i++) {
        var random = Math.floor(Math.random() * 200) + 20;
        if(random % 2 === 0) {
            console.log(random + " is even!");
        } else {
            console.log(random + " is odd!");
        }
    }
}

tenRandomOddorEven();


function numPyramid() {
    for(var i = 1; i <= 9; i++) {
        console.log(i.toString().repeat(i));
    }
}

numPyramid();


function countDownByFive() {
    for(var i = 100; i >= 5; i -= 5) {
       console.log(i);
    }
}

countDownByFive();



