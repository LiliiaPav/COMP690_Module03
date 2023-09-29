/*Larger or Smaller?

Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.
*/

let firstNum = prompt("Enter your first number: ");
let secondNum = prompt("Enter your second number: ");

//to avoid not numbers
firstNum=Number(firstNum);
secondNum=Number(secondNum);
if (isNaN(firstNum) || isNaN(secondNum)) {
    document.write(`<h1>Your input is invalid</h1>`);
  }

else if (firstNum>=secondNum){
    document.write(`<h1>${firstNum}</h1>`);
}
else {
    document.write(`<h1>${secondNum}</h1>`);
}

 

