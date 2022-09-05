/** @format */

const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const employeeDivs = (employeeArray) => {
  let html = "";

  for (var i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].getRole() === "Manager") {
      html = html + Manager(employeeArray[i]);
      console.log(html.length);
    }
    if (employeeArray[i].getRole() === "Engineer") {
      html = html + Engineer(employeeArray[i]);
      console.log(html.length);
    }
    if (employeeArray[i].getRole() === "Intern") {
      html = html + Intern(employeeArray[i]);
      console.log(html.length);
    }
  }
  return html;
};

const temp = (dataVar) => {
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
        ${employeeDivs(dataVar)}
            <div class="card text-bg-primary mb-3 text-center" style="max-width: 18rem;">
                <div class="card-header"><a href=""></a>
            </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"></li>
                        <li class="list-group-item"></li>
                        <li class="list-group-item"></li>
                      </ul>
                </div>
        </div>
      </body>
    </html>`;
};

module.exports = temp;
