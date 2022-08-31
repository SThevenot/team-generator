/** @format */

const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = [
  "What is the team manager's name?",
  "What is the team manager's employee ID?",
  "What is the team manager's email address?",
  "What is the team manager's office number?",
  "Do you want to add any other team members or see your new web page?",
  "What is the engineer's name?",
  "What is the engineer's employee ID?",
  "What is the engineer's email?",
  "What is the engineer's GitHub username?",
  "What is the intern's name?",
  "What is the intern's employee ID?",
  "What is the intern's email?",
  "What is the intern's school?",
];

const getStart = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "managerName",
      },
      {
        type: "input",
        message: questions[1],
        name: "managerId",
      },
      {
        type: "input",
        message: questions[2],
        name: "managerEmail",
      },
      {
        type: "input",
        message: questions[3],
        name: "managerOffice",
      },
    ])
    .then((data) => {
      console.log(data);
      var manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOffice
      );
      console.log(manager);
      console.log(manager.name);
      getMenu();
    });
};

const getMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: questions[4],
        choices: ["Add an engineer", "Add an intern", "Finish"],
        name: "menu",
      },
    ])
    .then((data) => {
      console.log(data.menu);
      fs.writeFile("./index.html", getFinish(data), (error) => {
        if (error) throw error;
      });
      if (data.menu === "Add an engineer") {
        return getEngineer();
      } else if (data.menu === "Add an intern") {
        return getIntern();
      } else if (data.menu === "Finish") {
        return getFinish();
      }
    });
};

const getEngineer = () => {
  console.log("ENGINEER");
  inquirer
    .prompt([
      {
        type: "prompt",
        message: questions[5],
        name: "engineerName",
      },
      {
        type: "prompt",
        message: questions[6],
        name: "engineerId",
      },
      {
        type: "prompt",
        message: questions[7],
        name: "engineerEmail",
      },
      {
        type: "prompt",
        message: questions[8],
        name: "engineerGithub",
      },
    ])
    .then((data) => {
      console.log(data);
      const engineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.engineerGithub
      );
      console.log(engineer);
      getMenu();
    });
};

const getIntern = () => {
  console.log("INTERN");
  inquirer
    .prompt([
      {
        type: "prompt",
        message: questions[9],
        name: "internName",
      },
      {
        type: "prompt",
        message: questions[10],
        name: "internId",
      },
      {
        type: "prompt",
        message: questions[11],
        name: "internEmail",
      },
      {
        type: "prompt",
        message: questions[12],
        name: "internSchool",
      },
    ])
    .then((data) => {
      console.log(data);
      const intern = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.internSchool
      );
      console.log(intern);
      getMenu();
    });
};

function getFinish(data) {
  console.log(data);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <p>${manager.name}</p>
  </body>
  </html>`;
}

getStart();
