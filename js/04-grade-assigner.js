/*
The “Grade Assigner” Application

Usage: Use else if or switch statements

Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.
*/
let  choice = Number(prompt("Enter a number between 1 and 100"));
if (isNaN(choice) || choice < 1 || choice > 100) {
    console.log("Invalid input, only numbers between 1 and 100 are accepted");
  }
else {
    //console.log(choice);
    if (choice<60) {console.log('You received an F');}
    else if (choice<70) {console.log('You received a D');}    
    else if (choice<80) {console.log('You received a C');} 
    else if (choice<90) {console.log('You received a B');} 
    else {console.log('You received a A');} 
}

