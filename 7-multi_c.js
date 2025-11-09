#!/usr/bin/node

// Get the first argument and convert to integer
const x = parseInt(process.argv[2]);

// Check if conversion failed
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    // Use loop to print "C is fun" x times
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
