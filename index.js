#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 279,
};
let user_answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: chalk.yellow("Enter from currency:"),
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        type: "list",
        name: "to",
        message: chalk.yellow("Enter to currency:"),
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        type: "number",
        name: "amount",
        message: chalk.yellow("Enter amount:"),
    },
]);
let from = currency[user_answer.from];
let to = currency[user_answer.to];
let amount = user_answer.amount;
let basedAmount = amount / from;
let result = basedAmount * to;
console.log(chalk.green(`${amount} ${user_answer.from} is equal to ${result} ${user_answer.to}`));
