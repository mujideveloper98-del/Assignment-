let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

let sum            = num1 + num2;
let subtraction    = num1 - num2;
let multiplication = num1 * num2;
let division       = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

console.log("Sum: " + sum);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);



let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log(number + " is Even.");
} else {
    console.log(number + " is Odd.");
}

let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are NOT eligible to vote.");
}
let numbers = [10, 20, 30, 40, 50];
let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}

console.log("Total Sum: " + totalSum);


let str = prompt("Enter a string:").toLowerCase();
let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log(str + " is a Palindrome!");
} else {

  console.log(str + " is NOT a Palindrome.");}

function findLargest(a, b, c) {
    if (a >= b && a >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}

let n1 = parseFloat(prompt("Enter first number:"));
let n2 = parseFloat(prompt("Enter second number:"));
let n3 = parseFloat(prompt("Enter third number:"));

console.log("Largest: " + findLargest(n1, n2, n3));

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let num = parseInt(prompt("Enter a number:"));
console.log("Factorial: " + factorial(num));


let names = ["Ali", "Sara", "Ahmed", "Zara", "Usman"];

for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

q10
let password = prompt("Enter your password:");

if (password.length < 8) {
    console.log("Weak Password!");
} else {
    console.log("Strong Password!");
}
