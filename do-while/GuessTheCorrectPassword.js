// Define the correct password
const CORRECT_PASSWORD = "secret"; 

let userGuess; // Variable to store the user's input

do {
    // Prompt the user for the password inside the loop
    userGuess = prompt("What is the secret password?"); 
    
    // Optional: Provide feedback if the password is wrong
    if (userGuess !== CORRECT_PASSWORD) {
        alert("Sorry, try again.");
    }

} while (userGuess !== CORRECT_PASSWORD); // Continue looping as long as the guess is incorrect

// This code runs only after the loop condition becomes false (i.e., the password is correct)
alert("You know the secret password. Welcome!");
