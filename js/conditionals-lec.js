"use strict";


// var isRaining = true;
//
// if(isRaining) {
//     console.log("It's Raining outside!");
// }


// var color = prompt("What is your favorite color?");
//
// if(color === "green") {
//     alert("Green is a nice color!");
// } else {
//     alert("You should probably choose a better color!");
// }



// function approachLight(color) {
//     if (color === "green") {
//         return "Go on and keep driving";
//     } else if (color === "yellow") {
//         return "Start slowing down!"
//     } else {
//         return "Stop at this light!"
//     }
// }

// Switch
// function approachLight(color) {
//     switch(color) {
//         case "green":
//             return "Go on and keep driving";
//         case "yellow":
//             return "Start slowing down!";
//         default:
//             return "Stop at this light!";
//     }
// }

// console.log(approachLight("red"));

function shoppingDone(clicked) {
    if(clicked) {
        return "Child has earned $10 this week."
    } else {
        return "Child has earned $5 this week."
    }
}

function weatherType(weather) {
    if(weather === "sunny") {
        return "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    } else if(weather === "rainy") {
        return "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long";
    } else if(weather === "snowing") {
        return "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    } else {
        return "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    }
}

function weatherTypeSwitch(weatherSwitch) {
    switch(weatherSwitch) {
        case "sunny":
            return "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
        case "rainy":
            return "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long";
        case "snowing":
            return "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
        default:
            return "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    }
}

function changeBackground(bgColor) {
    return (bgColor === white) ? "change background color to black" : "Change background color to white";
}

