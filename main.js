#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; // Dollar
let myPin = 2489;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin Code!!!");
    let operationsAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fastcash", "checkbalance"],
        }
    ]);
    console.log(operationsAns);
    if (operationsAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficiant Balance");
        }
        // = += -=
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationsAns.operation === "fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select the amount which you withdraw",
                type: "list",
                choices: [5000, 10000, 15000, 20000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`You have successfully withdrawl ${fast.fastcash} \nYour remaining balance is ${myBalance}`);
    }
    else if (operationsAns.operation === "check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
