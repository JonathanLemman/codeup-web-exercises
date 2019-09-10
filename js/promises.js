"use strict";

// ES5
// function wait(num) {
//     return new Promise(function (res) {
//         setTimeout(function () {
//             res();
//         }, num)
//     });
// }

// ES6
const wait = num => new Promise(res => setTimeout(() => res(), num));


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// 33e683853afe16decc1e781aba86975d4a64c591

// fetch(url, {headers: {'Authorization': '33e683853afe16decc1e781aba86975d4a64c591'}});
