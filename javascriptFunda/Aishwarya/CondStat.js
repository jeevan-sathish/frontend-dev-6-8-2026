//if statement
let age = 20;
if (age >= 18) {
    console.log("You can vote");
}

//if else
let age = 16;
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

//if else if else
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 70) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

//Nested if
let age = 20;
let hasVoterid = true;
if (age >= 18) {
    if (hasVoterid) {
        console.log("Can vote");
    }
}

//Switch Statement
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}

//Ternary Operator
let age = 20;
let result = age >= 18
    ? "Adult"
    : "Minor";

console.log(result);