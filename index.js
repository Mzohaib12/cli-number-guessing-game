#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("welcome to number guessing game");
const answer = await inquirer.prompt([
    { message: "enter any number between 1-6",
        type: "number",
        name: "guessedNumber"
    }
]);
if (answer.guessedNumber == randomNumber) {
    console.log("Congrats you guessed true number");
}
else {
    console.log("oops you gussed wrong number");
}
