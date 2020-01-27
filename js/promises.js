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
// const wait = num => new Promise(res => setTimeout(() => res(), num));
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



const filterData = data => data.filter(d => d.type === "PushEvent");

function gitHubUser(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitToken}`}})
        .then(response => response.json())
        .then(data => filterData(data))
        .then(data => console.log(data[0].created_at));
}

gitHubUser('JonathanLemman');










// fetch('https://swapi.co/api/people/1')
//     .then(response => response.json())
//     .then(data => console.log(data));

