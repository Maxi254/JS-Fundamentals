#!/usr/bin/node

// Check if the first user argument exists (process.argv[2])
if (process.argv[2] === undefined) {
    // No arguments were passed
    console.log("No argument");
} else {
    // Print the first argument
    console.log(process.argv[2]);
}
