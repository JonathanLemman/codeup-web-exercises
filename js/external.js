"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
var favoriteColor = prompt("What's your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like
// it). If price for a movie per day is $3, how much will you have to pay?

var littleMermaidDaysRented = prompt("How many days did you rent The Little Mermaid for?");
var brotherBearDaysRented = prompt("How many days did you rent Brother Bear for?");
var herculesDaysRented = prompt("How many days did you rent Hercules for?");
var pricePerMovie = prompt("What is the price per movie?");

var finalPrice = (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * pricePerMovie;
alert("You paid " + "$" + finalPrice + " for movies this week!");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much
// will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googlePayPerHour = prompt("How much did Google pay you per hour?");
var amazonPayPerHour = prompt("How much did Amazon pay you per hour?");
var facebookPayPerHour = prompt("How much did Facebook pay you per hour?");
var googleHoursWorked = prompt("How many hours did you work for Google?");
var amazonHoursWorked = prompt("How many hours did you work for Amazon?");
var facebookHoursWorked = prompt("How many hours did you work for Facebook?");
var googleTotal = googlePayPerHour * googleHoursWorked;
var amazonTotal = amazonPayPerHour * amazonHoursWorked;
var facebookTotal = facebookPayPerHour * facebookHoursWorked;

var paymentsReceived = googleTotal + amazonTotal + facebookTotal;
alert("You made a total of " + "$" + paymentsReceived + " this week!");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var isClassFull = prompt("Is the class full?");
var doesClassConflict = prompt("Does this class schedule conflict with your current schedule?");

var studentEnrolled = (isClassFull === 'no') && (doesClassConflict === 'no');
alert("The students enrollment status is: " + studentEnrolled);

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var personBuys = prompt("How many items did you purchase?");
var isPremiumMember = prompt("Are you a Premium Member?");
var isOfferExpired = prompt("Is this offer valid?");

var offerApplied = (personBuys > 2 || (isPremiumMember !== 'no')) && (isOfferExpired === 'yes');
alert("This offers status is: " + offerApplied);
