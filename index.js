#! /usr/bin/env  node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1: what is the correct way to  chexk if two value are not equal to in typescript  ? ",
        choices: ["a==b", "a===b", "a=b", "a!=b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2: which of the following characters is commonly allowed in variables names in  typescript ?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3:  which operator is commonly used for string concatenation in typescript ?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4: In typescript, which symbol is commonly used to terminate statement ?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5:  which method of inquirer.js is used to start the prompt interface and recieve user interface ?",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log(chalk.bold.blue("1.CORRECT!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.magenta("1.INCORRECT!"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.bold.blue("2.CORRECT!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.magenta("2.INCORRECT!"));
}
switch (quiz.question_3) {
    case "+":
        console.log(chalk.bold.blue("3.CORRECT"));
        ++score;
        break;
    default:
        console.log(chalk.bold.magenta("3.INCORRECT!"));
}
switch (quiz.question_4) {
    case ";":
        console.log(chalk.bold.blue("4.CORRECT!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.magenta("4.INCORRECT!"));
}
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.bold.blue("5.CORRECT!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.magenta("5.INCORRECT!"));
}
console.log(chalk.bold.yellow.italic(`score : ${score}`));
