#!/usr/bin/node

// Get the first argument and convert to integer
const size = parseInt(process.argv[2]);

// Check if conversion failed
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Outer loop for rows
  for (let i = 0; i < size; i++) {
    let row = '';
    
    // Inner loop for columns
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    
    // Print the completed row
    console.log(row);
  }
}
