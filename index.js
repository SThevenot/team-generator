/** @format */

const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const createTeam = require("./src/template");
const membersArray = [];
var dataVar = "";
var managerText;
var engineerText;
var internText;
var intern;
var engineer;
var manager;

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
      var manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOffice
      );
      dataVar = data;
      console.log(manager.name);
      membersArray.push("manager");
      console.log(membersArray);
      fs.writeFile("./index.html", getFinish(data), (err) => {
        if (err) throw err;
      });
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
      if (data.menu === "Add an engineer") {
        getEngineer();
      } else if (data.menu === "Add an intern") {
        getIntern();
      } else if (data.menu === "Finish") {
        console.log("congrats!");
      }
    });
};
const getEngineer = () => {
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
      var engineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.engineerGithub
      );
      dataVar = data;
      membersArray.push("engineer");
      fs.writeFile("./index.html", getFinish(data), (err) => {
        if (err) throw err;
      });
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
      var intern = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.internSchool
      );
      dataVar = data;
      console.log(intern.name);
      membersArray.push("intern");
      fs.writeFile("./index.html", getFinish(data), (err) => {
        if (err) throw err;
      });
      getMenu();
    });
};

const boilerplateArr = [];



function getFinish() {
  for (var i = 0; i < membersArray.length; i++) {
    if (membersArray.length === 1) {
      getManagerHtml();
      boilerplateArr.push(managerText);
    } else if (membersArray.slice(-1) == "engineer") {
      getEngineerHtml();
      boilerplateArr.push(engineerText);
    } else if (membersArray.slice(-1) == "intern") {
      getInternHtml();
      boilerplateArr.push(internText);
    }
  }
  const finalArray = Array.from(new Set(boilerplateArr));

  return `<!-- @format -->

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
        <title>Team Generator</title>
      </head>
      <body>
        <header>
          <nav class="navbar navbar-expand-lg bg-primary">
            <h1 class="ps-5">Team Generator</h1>
          </nav>
        </header>
        <div>
           ${finalArray}
        </div>
        </div>
      </body>
    </html>`;
}

function getManagerHtml() {
  managerText = `<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${dataVar.managerName} Team Manager</div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${dataVar.managerId}</li>
          <li class="list-group-item"><a href="mailto:${dataVar.managerEmail}">Email:${dataVar.managerEmail}</a></li>
          <li class="list-group-item">office number: ${dataVar.managerOffice}</li>
        </ul>
  </div>
  </div>`;
  return;
}

function getEngineerHtml() {
  engineerText = `<div class="card text-bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">${dataVar.engineerName} Engineer</div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${dataVar.engineerId}</li>
          <li class="list-group-item"><a href="mailto:${dataVar.engineerEmail}">Email:${dataVar.engineerEmail}</a></li>
          <li class="list-group-item"><a href="https://github.com/${dataVar.engineerGithub}"Github: ${dataVar.engineerGithub}</li>
        </ul>
  </div>
  </div>`;
  return;
}

function getInternHtml() {
  internText = `<div class="card text-bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">${dataVar.internName} Intern</div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${dataVar.internId}</li>
          <li class="list-group-item"><a href="mailto:${dataVar.internEmail}">Email:${dataVar.internEmail}</a></li>
          <li class="list-group-item">School: ${dataVar.internSchool}</li>
        </ul>
  </div>
  </div>`;
}

getStart();
