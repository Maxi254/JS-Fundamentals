#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Convert to integer
const num = parseInt(arg);

// Check if the conversion resulted in NaN
if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number:", num);
}
