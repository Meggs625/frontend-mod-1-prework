/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/


// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var warning = 'Harry Potter must not return to Hogwarts!';
console.log(warning);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = 'Megan';
var isHungry = true;
var numberOfPets = 1;

console.log(firstName, isHungry, numberOfPets);
// or
console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);
// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
/* Meg - The variable names helped to guide the response. The first name would be a string and then number of pets would be a number.
It wouldn't make sense to put a string for the pet number or a number for the name.
Where I did trip up is the clear boolean of "isHungry". My first response was "always" which is,
in fact, true :) However, this is a yes or no, you are or are not hungry.*/

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = 'Olivia';
isHungry = false;
numberOfPets = 10;

console.log(firstName, isHungry, numberOfPets);
// or
console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);
// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?

/* Meg - Yes!
Harry Potter
22
Harry Potter must not return to Hogwarts!
Megan Always 1
Olivia Sometimes 10
14 */
