"use strict";


function incrementByItself() {
    var x = 2;
    while(x <= 65536) {
        console.log(x);
        x = x + x;
    }
}
incrementByItself();


// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

// generate random number for cones to sell---
// generate random number for amount of cones being sold---
// subtract cones being bought by cones to sell
// use do-while to log amount of cones sold to each person


function conesToSell() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;
        if(allCones >= conesSold) {
            console.log(conesSold + " cones sold...");
            allCones = allCones - conesSold;
        } else {
            console.log("Cannot sell you " + conesSold +" cones I only have " + allCones + "...");
        }
    }while(allCones > 0);
    console.log("Yay! I sold them all!");
}
conesToSell();


