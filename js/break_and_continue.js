"use strict";


// var oddUser = prompt("Enter an odd number");

while(true) {
    var oddUser = prompt("Enter an odd number");
    if(oddUser % 2 === 1) {
        break;
    }
}

for(var i = 1; i <= 50; i++) {
    if(i % 2 === 0) {
        continue;
    }
    if(i === parseFloat(oddUser)){
        console.log("Yikes! Skipping number: " + oddUser);
        continue;
    }
    console.log("Here is an odd number: " + i);
}