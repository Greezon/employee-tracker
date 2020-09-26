const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "533d1355",
  database: "tracker",
});

connection.connect(() => {
  console.log("welcome to ian's hr system!!!");
  startMenu();
});
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

function viewDepartment() {
  console.log("List of Departments");
  console.log("-------------------");
  connection.query("select * from department;", function (error, record) {
    if (error) throw error;
    console.table(record);
    startMenu();
  });
}

function viewRole() {
  console.log("List of roles");
  console.log("-------------------");
  connection.query("select * from title;", function (error, record) {
    if (error) throw error;
    console.table(record);
    startMenu();
  });
}

function viewEmployee() {
  console.log("List of employees");
  console.log("-------------------");
  connection.query("select * from employee;", function (error, record) {
    if (error) throw error;
    console.table(record);
    startMenu();
  });
}

function deleteRole() {
  connection.query("select * from title;", function (error, record) {
    if (error) throw error;
    const roleChoices = record.map(({ id, title }) => ({
      name: title,
      value: id,
    }));
    inquirer
      .prompt([
        {
          type: "list",
          name: "roleId",
          message: "Which role do you want to remove?",
          choices: roleChoices,
        },
      ])
      .then(function (params) {
        connection.query(
          "DELETE FROM title WHERE id = ?",
          params.roleId,
          function (error, data) {
            if (error) throw error;
            console.log("Successfully permenatnly deleted the role.");
            startMenu();
          }
        );
      });
  });
}

function addEmployee() {
  // connection.query("select * roles")
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Enter First Name",
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter Last Name",
      },
      {
        type: "list",
        name: "role_id",
        message: "Enter Role",
        choices: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
        ],
      },
      {
        type: "list",
        name: "manager_id",
        message: "Enter Manager ID",
        choices: [1, 2, 3, 4, 5, 11, 12, 13, 14, 15],
      },
    ])
    .then(function (entry) {
      connection.query(
        `insert into employee(first_name, last_name, role_id, manager_id) values("${entry.first_name}", "${entry.last_name}", ${entry.role_id}, ${entry.manager_id})`,
        function () {
          startMenu();
        }
      );
    });
}

function addRole() {
  connection.query(
    "SELECT department.id, department.name FROM department",
    function (error, data) {
      const departmentChoices = data.map(({ id, name }) => ({
        name: name,
        value: id,
      }));
      inquirer
        .prompt([
          {
            type: "input",
            name: "Title",
            message: "What is the name of the position",
          },
          {
            type: "input",
            name: "Salary",
            message: "What is the salary for this position?",
          },
          {
            type: "list",
            name: "department_id",
            message: "Which department does the role belong to?",
            choices: departmentChoices,
          },
        ])
        .then(function (entry) {
          connection.query(
            `insert into title(title, salary, department_id) values("${entry.Title}", "${entry.Salary}", ${entry.department_id})`,
            function (error, data) {
              if (error) throw error;
              console.log("Successfully added the role.");
              startMenu();
            }
          );
        });
    }
  );
}

function updateRole() {
  connection.query("select * from employee;", function (error, record) {
    if (error) throw error;
    const allEmployees = record.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeId",
          message: "Which employee's role do you want to update?",
          choices: allEmployees,
        },
      ])
      .then(function (entry) {
        connection.query("select * from title;", function (error, record) {
          if (error) throw error;
          const roleChoices = record.map(({ id, title }) => ({
            name: title,
            value: id,
          }));
          inquirer
            .prompt([
              {
                type: "list",
                name: "roleId",
                message: "Which role do you want to update?",
                choices: roleChoices,
              },
            ])
            .then(function (params) {
              connection.query(
                "UPDATE employee SET role_id = ? WHERE id = ?",
      [params.roleId, entry.employeeId],
                function (error, data) {
                  if (error) throw error;
                  console.log("Successfully updated the role!");
                  startMenu();
                }
              );
            });
        });
      });
  });
}

// Add role table
// follow the function above for
