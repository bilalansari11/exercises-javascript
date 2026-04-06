//   1

// let cityName = "Karachi";

// let userCity = prompt("What is your City Name?");

// if (userCity == cityName) {
//     // console.log("Welcome to city of lights!");
//     document.write("Welcome to city of lights!");
// } else {
//     // console.log("Nice city!");
//     document.write("Nice city!");
// }

//   2

// let userGender = prompt("Enter you Gender!");

// if (userGender == "Male") {
//     // console.log("Good Morning Sir!");
//     document.write("<p>Good Morning Sir!</p>");
// } else if(userGender == "Female") {
//     // console.log("Good Morning Ma'am!");
//     document.write("<p>Good Morning Ma'am!</p>");
// } else {
//     // console.log("Not Applicable!");
//     document.write("<p>Not Applicable!</p>");
// }

//   3

// let userInput = prompt("What's the color of traffic signal?");

// if (userInput === "Red") {
//     document.write("Must Stop");
// } else if (userInput === "Yellow") {
//     document.write("Ready to move");
// } else {
//     document.write("Move now");
// }

//   4

// let remainingFuel = +prompt("How many fuel (in litres) is left in your car?");

// if (remainingFuel <= 0.25) {
//     alert("Please refill your tank immediately!");
// } else {
//     alert("Check again after sometime!");
// }

//   5

// part (a)

// var a = 4;

// if (++a === 5) {
//     alert("given condition for variable a is true!");
// }

// displayed alert in part (a)

// part (b)

// var b = 82;

// if (b++ === 83) {
//     alert("given condition for variable b is true!");
// }

// no displayed alert in part (b)

// var c = 12;

// if (c++ === 13) {
//     alert("condition 1 is true!");
// }
// if (c === 13) {
//     alert("condition 2 is true!");
// }
// if (++c < 14) {
//     alert("condition 3 is true!");
// }
// if (c === 14) {
//     alert("condition 4 is true!");
// }

// condition 2 & 4 displayed alert

// part (d)

// var materialCost = 20000;
// var labourCost = 2000;
// var totalCost = materialCost + labourCost;

// if (totalCost === labourCost + materialCost) {
//     alert("The cost equals!");
// }

// displayed alert in part (d)

// part (e)

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// displayed alert on true

// part (f)

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// displayed alert in part (f)

//   6

// let subject1 = prompt("Enter your 1st subject name?");
// let subject2 = prompt("Enter your 2nd subject name?");
// let subject3 = prompt("Enter your 3rd subject name?");

// let marksInSub1 = +prompt("Enter marks in " + subject1 + "?");
// let marksInSub2 = +prompt("Enter marks in " + subject2 + "?");
// let marksInSub3 = +prompt("Enter marks in " + subject3 + "?");

// let totalMarksPerSub = 100;
// let totalMarksOfAllSub = totalMarksPerSub * 3;
// let marksObtainedInAllSub = marksInSub1 + marksInSub2 + marksInSub3;

// let percentageOfAllSub = (marksObtainedInAllSub / totalMarksOfAllSub) * 100;

// let gradeAccToPer; 
// let remarksAccToPer;

// if(percentageOfAllSub >= 80) {
//     gradeAccToPer = "A1";
//     remarksAccToPer = "Excellent";
// } else if (percentageOfAllSub >= 70) {
//     gradeAccToPer = "A";
//     remarksAccToPer = "Good";
// } else if (percentageOfAllSub >= 60) {
//     gradeAccToPer = "B";
//     remarksAccToPer = "You need to improve";
// } else {
//     gradeAccToPer = "Fail";
//     remarksAccToPer = "Sorry";
// }

// document.write("<h1>Marks Sheet </h1>");
// document.write("<p>Total marks: " + totalMarksOfAllSub + "</p>");
// document.write("<p>Marks obtained: " + marksObtainedInAllSub + "</p>");
// document.write("<p>Percentage: " + percentageOfAllSub + "% </p>");
// document.write("<p>Grade: " + gradeAccToPer + "</p>");
// document.write("<p>Remarks: " + remarksAccToPer + "</p>");

//   7

// let secretNumber = 7;

// let userNumber = +prompt("Guess the secret number (1 - 10)?");

// if(userNumber === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if(userNumber + 1 === secretNumber) {
//     alert("Close enough to the correct answer")
// } else {
//     alert("Try again!");
// }

//   8

// let userInput = +prompt("Enter any number?");

// if(userInput % 3 === 0) {
//     alert("Divisible by 3")
// }else {
//     alert("not divisible by 3")
// }

//   9

// let userInput = +prompt("Enter any number");

// if(userInput % 2 === 0) {
//     alert("The given number is even");
// }else {
//     alert("The given number odd");
// }

//   10

// let userInput = prompt("What's the temperature?");

// if (userInput > 40) {
//     alert("Its too hot outside.");
// } else if( userInput > 30) {
//     alert("The Weather today is Normal.");
// } else if(userInput > 20) {
//     alert("Today’s Weather is cool.");
// } else {
//     alert("OMG! Today’s weather is so Cool.");
// }

//   11

// let number1 = +prompt("Enter first number!");
// let number2 = +prompt("Enter second number!");
// let operation = prompt("Enter operation (+, -, *, /, & %)");

// if(operation === "+") {
//     alert(number1 + number2);
// } else if(operation === "-") {
//     alert(number1 - number2);
// } else if(operation === "*") {
//     alert(number1 * number2);
// } else if(operation === "/") {
//     alert(number1 / number2);
// } else {
//     alert(number1 % number2);
// }

// Completed Exercises of 9-11