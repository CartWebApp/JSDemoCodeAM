let totalLaps = 0;  //creating variable for total number of laps

for (let miles = 0; miles < 6; miles++){ //creating mile variable, must be less than 6, increases by 1
    totalLaps += 4; //every mile is 4 laps
    console.log(`${miles + 1} miles out of 6 ran (${totalLaps} laps)`); //keeps track of how many laps and miles ran
}
console.log(`${totalLaps} total laps ran! You're done!`); //total number of laps ran