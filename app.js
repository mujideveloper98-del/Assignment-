// Q1: Basic Calculator
// asking user for two numbers to work with
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

let sum = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;

// making sure we don't divide by zero
let division;
if (num2 !== 0) {
    division = num1 / num2;
} else {
    division = "Cannot divide by zero";
}

console.log("Sum: " + sum);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);


// Q2: Even or Odd
let number = parseInt(prompt("Enter a number:"));

// if remainder is 0 when divided by 2, its even
if (number % 2 == 0) {
    console.log(number + " is Even.");
} else {
    console.log(number + " is Odd.");
}


// Q3: Voting Eligibility
let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are NOT eligible to vote.");
}


// Q4: Sum of Array Elements
let numbers = [10, 20, 30, 40, 50];
let totalSum = 0;

// looping through the array and adding each element
for (let i = 0; i < numbers.length; i++) {
    totalSum = totalSum + numbers[i];
}

console.log("Total Sum: " + totalSum);


// Q5: Palindrome Checker
// converting to lowercase so "Aba" and "aba" are treated the same
let str = prompt("Enter a string:").toLowerCase();
let reversed = str.split("").reverse().join("");

if (str == reversed) {
    console.log(str + " is a Palindrome!");
} else {
    console.log(str + " is NOT a Palindrome.");
}


// Q6: Find the Largest Number
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

let n1 = parseFloat(prompt("Enter first number:"));
let n2 = parseFloat(prompt("Enter second number:"));
let n3 = parseFloat(prompt("Enter third number:"));

console.log("Largest: " + findLargest(n1, n2, n3));


// Q7: Print Even Numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// Q8: Factorial of a Number
function factorial(n) {
    // base case: 0! and 1! are both 1
    if (n == 0 || n == 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

let num = parseInt(prompt("Enter a number:"));
console.log("Factorial: " + factorial(num));


// Q9: Print Array in Reverse
let names = ["Ali", "Sara", "Ahmed", "Zara", "Usman"];

// starting from the last index and going backwards
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// Q10: Password Strength Checker
let password = prompt("Enter your password:");

// a password is considered strong if it has 8 or more characters
if (password.length < 8) {
    console.log("Weak Password!");
} else {
    console.log("Strong Password!");
}
