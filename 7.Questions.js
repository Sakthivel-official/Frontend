// Q1.Reverse Integer

var num = 123;
console.log("The Number:", num);

var reversednum = 0;
while (num > 0) {
  var temp = num % 10;
  reversednum = reversednum * 10 + temp;
  num = Math.floor(num / 10);
}
console.log(`Reversed Number is: ${reversednum}`);

// Q2.To print 1 to 100

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Q3.To print fibonacci series

function fibonacci(num1) {
  if (num1 < 0) {
    return "Please Enter Positive Number";
  } else if (num1 === 0 || num1 === 1) {
    return 1;
  } else {
    return num1 * fibonacci(num1 - 1); //recursive function - function call itself
  }
}

let num1 = 5; //pass a value for fibonacci
let result = fibonacci(num1);

console.log(`The Fibonacci of ${num1} is: ${result}`); //Ans: 120
