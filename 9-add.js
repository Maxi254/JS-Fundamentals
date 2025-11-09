#!/usr/bin/node

// Define the add function
function add(a, b) {
  return a + b;
}

// Get the two arguments and convert to numbers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Check if both arguments are valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('NaN');
} else {
  // Call the add function and print the result
  const result = add(num1, num2);
  console.log(result);
}
