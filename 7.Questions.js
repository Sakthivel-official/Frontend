// -----------------------------Q1. Reverse Integer-----------------------------------

var num = 123;
console.log("The Number:", num);

var reversednum = 0;
while (num > 0) {
  var temp = num % 10;
  reversednum = reversednum * 10 + temp;
  num = Math.floor(num / 10);
}
console.log(`Reversed Number is: ${reversednum}`);

// -------------------------------Q2. To print 1 to 100-------------------------------

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// ---------------------Q3. To print Factorial of given number-----------------------

function factorial(num1) {
  if (num1 < 0) {
    return "Please Enter Positive Number";
  } else if (num1 === 0 || num1 === 1) {
    return 1;
  } else {
    return num1 * factorial(num1 - 1); //recursive function - function call itself
  }
}

let num1 = 5; //pass a value for factorial
let result = factorial(num1);
console.log(`The Factorial of ${num1} is: ${result}`); //Ans: 120

// ------------------------------Q4. Fibonacci Series--------------------------------

let n1 = 0;
let n2 = 1;
let temp;

function fibonacci(num) {
  for (let i = 0; i <= num; i++) {
    console.log(n1); 
    temp = n1 + n2; //swapping the value
    n1 = n2;
    n2 = temp;
  }
}

fibonacci(8); //call the function and pass the input
