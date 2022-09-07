/** @format */

const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const data = require("../index");

const createManagerData = function (manager) {
  return `<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${dataVar.managerName} Team Manager</div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${dataVar.managerId}</li>
          <li class="list-group-item">Email: mailto:${dataVar.managerEmail}</li>
          <li class="list-group-item">office number: ${dataVar.managerOffice}</li>
        </ul>
  </div>`;
};

const createEngineerData = function (engineer) {
  return `<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${dataVar.engineerName} Team Manager</div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${dataVar.engineerId}</li>
          <li class="list-group-item">Email: mailto:${dataVar.engineerEmail}</li>
          <li class="list-group-item">office number: ${dataVar.engineerGithub}</li>
        </ul>
  </div>`;
};

const createInternData = function (intern) {
  return `<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${dataVar.internName} Team Manager</div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${dataVar.internId}</li>
          <li class="list-group-item">Email: mailto:${dataVar.internEmail}</li>
          <li class="list-group-item">office number: ${dataVar.internSchool}</li>
        </ul>
  </div>`;
};

console.log(data);
generateTeam = (data) => {
  teamArray = [];
  for (var i = 0; i < data.length; i++) {
    const employees = data[i];
    const position = employee.getRole();
    if (position === "Intern") {
      const internDiv = createInternData(employees);
      teamArray.push(internDiv);
    }
    if (position === "Manager") {
      const managerDiv = createManagerData(employees);
      teamArray.push(managerDiv);
    }
    if (position === "Engineer") {
      const engineerDiv = createEngineerData(employees);
      teamArray.push(engineerDiv);
    }
  }
  const employeeDivs = teamArray.join("");
  const createTeam = teamSite(employeeDivs);
  return createTeam;
};

const createTeam = function (employeeDivs) {
  return `<!DOCTYPE html>
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
          ${employeeDivs}
      </div>
    </body>
  </html>`;
};

module.exports = generateTeam;
