
import inquirer from "inquirer";
let students = true;
{
  let students = await inquirer.prompt([
  // this your name code lines
    {
      type: "input",
      name: "name",
      message: "What your name stutdents?",
    },
  // This is your  Father name code lines
    {
        type: "input",
        name: "Father name",
        message: "what your Father ?",
    },
  // This is your email code lines
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
// This is your phone number code lines
    {
      type: "input",
      name: "phone",
      message: "What is your phone number?",
    },
 // This is your age code lines
    {
      type: "input",
      name: "age",
      message: "how old are you age?",
    },
 // This is your gender code lines
    {
      type: "list",
      name: "gender",
      message: "What is your gender?",
      choices: ["Male", "Female", "Other"],
    },
    // this is your degree code lines
     {
      type: "list",
      name: "DEGREE",
      message: "What your study Place name?",
      choices: ["shcool", "college", "university", "Other", ]
     },
     // this is your field code lines
        {
          type: "list",
          name: "fields",
          message: "choose your field ?",
          choices: ["Masters"," Bachelor's"," Associates Degree.", "Nothing ", "Other", ] 
        },  
  ]);
  
      
  console.log(students);
 console.log("Thanks you...");  
 
 }
