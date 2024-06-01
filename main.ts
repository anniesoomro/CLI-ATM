#! /usr/bin/env node
import inquirer from "inquirer"
let myBalance =  0; // Dollar
let isContinue = true;
const pinCode = 2489;

 const message = "Welcome to ATM";
 console.log(message);

 let pin_ans = await inquirer.prompt({
  type: "number",
  name: "ans",
  message: "Please enter pin code"
 })

 if(pin_ans.ans === 2489){
  do {
  let ans = await inquirer.prompt({
    type: "list",
    name: "list",
    message: "Select any option",
    choices: ["Deposit", "Withdraw", "Fast cash", "Balance check"]
  })

 //---------------------------------Deposit----------------------------------------
 if(ans.list === "Deposit"){
  let ans = await inquirer.prompt({
    type: "number",
    name: "Deposit_amount",
    message: "Please Enter your amount"
  })

  if(ans.Deposit_amount > 0){
    myBalance = myBalance + ans.Deposit_amount
    console.log(myBalance);
  }
}

//---------------------------------WithDraw----------------------------------------
else if(ans.list === "Withdraw"){
let ans = await inquirer.prompt({
type: "number",
name: "withdraw_amount",
message: "Please enter amount"
})

if (ans.withdraw_amount <= myBalance){
myBalance = myBalance - ans.withdraw_amount
console.log(myBalance);

}else{
console.log("Insufficiant Balance");
 }
}

//---------------------------------Fast cash----------------------------------------
else if(ans.list === "Fast cash"){
   let ans = await inquirer.prompt({
      type: "list",
      name: "fast_cash",
      message: "Please select one",
      choices: ["500", "1000", "2000", "5000"]
})

if(ans.fast_cash <= myBalance){
  if(ans.fast_cash === "500"){
     myBalance -= ans.fast_cash
     console.log(myBalance);

  }else if(ans.fast_cash === "1000"){
    myBalance -= ans.fast_cash
    console.log(myBalance);

  }else if(ans.fast_cash === "2000"){
    myBalance -= ans.fast_cash
    console.log(myBalance);

  }else if(ans.fast_cash === "5000"){
      myBalance -= ans.fast_cash
      console.log(myBalance);
  }
}
}

//---------------------------------Check balance----------------------------------------
else if(ans.list === "Balance check"){
    console.log(`your balance is: ${myBalance}`);
}

//---------------------------------while condition---------------------------------------
let while_ans = await inquirer.prompt({
type: "confirm",
name: "condition",
message: "Do you want to continue:"
})

if(while_ans.condition === false){
isContinue = false
}
} while (isContinue);
}
 else {
  console.log("Invalid pin code");
 }