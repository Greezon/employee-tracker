const inquirer = require("inquirer");
const mysql = require("require");
require("console.table")
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "533d1355",
    database: "tracker",
  },
  () => {
    console.log("welcome to ian's hr system!!!");
    startMenu();
  }
);
function startMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userChoice",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add Employees",
          "Add Roles",
          "Update Employee Roles",
          "Delete Role",
          "Delete Department",
          "Exit Application",
        ],
        message: "What would you like to do?",
      },
    ])
    .then(function (response) {
      switch (response.userChoice) {
        case "View Departments":
          viewDepartment();
          break;
        case "View Roles":
          viewRole();
          break;
        case "View Employees":
          viewEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Employees":
          addEmployee();
          break;
        case "Add Roles":
          addRole();
          break;
        case "Update Employee Roles":
          updateRole();
          break;
        case "Delete Role":
          deleteRole();
          break;
        case "Delete Department":
          deleteDepartment();
          break;
        case "Exit Application":
          connection.end();
          process.exit(0);
          break;
      }
    });
}

function viewDepartment(){
    connection.query("select * from department", function(error, record){
        console.table(record)
    })
}
