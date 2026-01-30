// Infinite loop (forgot to update countdown)
// let count = 1; 

// do {
// console.log("Count is:", count);
// BUG: we forgot to change count!
// } while (count <= 5);

// console.log("This line never runs."); 

// Note that the code above is broken code and will cause an infinite loop if run. The code at the bottom is the corrected version.

let count = 1;

do {
  console.log("Count is:", count);
  count++; // BUG FIXED: increment count to avoid infinite loop
} while (count <= 5);

console.log("Loop finished!");




