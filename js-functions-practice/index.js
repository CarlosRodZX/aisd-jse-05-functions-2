// Function Declaration - Greeting functoin (Standard Function) 

function greet(name) {
  return `Hello, ${name}! Welcome!`;

}

// Test the Greeting Function

console.log(greet("Alice")); // Output: Hello, Alice! Welcome!


// Arrow Function - Greeting function (Arrow Function)

const greetArrow = (name) => `Hello, ${name}! Welcome!`;

// Test the Arrow Function Greeting 

console.log(greetArrow("Bob")); // Output: Hello, Bob, welcome!



// Function Declaration - Check if a number is even or odd

function isEvenOrOdd(number) {

  if (number % 2 === 0) {

    return `${number} is even`;

  } else {

    return `${number} is odd`;
  }
}

// Test the Even or Odd function 

console.log(isEvenOrOdd(10)); // Output: 10 is even

console.log(isEvenOrOdd(7)); // Output: 7 is Odd


// Arrow Function - A function that calculates the square of a number 

const square = (num) => num * num;

// Test the Square function 

console.log(square(5)); // Output: 25

// Arrow Function - A function that calculates the sum of two numbers 

const add = (a,b) => a + b;

// Test the Add function

console.log(add(4,6)); // Output: 10

// Arrow Function - A function that calculates the difference between two numbers 

const subtract = (a, b) => a - b;

// Test the Subtract function

console.log(subtract(10,3)); // Output: 7

// Arrow Function - A function that  multiplies two numbers

const multiply = (a, b) => a * b;

// Test the multiply function

console.log(multiply(7, 5)); // Output: 35

// Arrow Function - A function that divides two numbers 

const divide = (a, b) => {

  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;

};

// Test the Divide function 
console.log(divide(20, 4)); // Output: 5

console.log(divide(10, 0)); // Output: Cannot divide by zero!

