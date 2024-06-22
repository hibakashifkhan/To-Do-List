#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let ToDoList = []
let conditions = true
console.log(chalk.bgYellowBright(" \n \t Welcome to my To-Do List \n"))

while(conditions){
    let AddTask = await inquirer.prompt([
        {
            name : "Task",
            type : "input",
            message : "Please Enter Your Task For today",

        }
    ]);
    ToDoList.push(AddTask.Task)
    console.log(`${AddTask.Task} Task has been Added to your To-Do List.`) 

    let AddMoreTasks = await inquirer.prompt([
        {
            name : "AddMore",
            type : "confirm",
            message : "Would you Like to Add more Tasks to your list?",
            default : "False",
        }
    ]);
    conditions =  AddMoreTasks.AddMore
}
console.log("Your Updated To-Do list is ready: ", ToDoList)
