"use strict";
let manager = { firstName: "jean-paul", lastName: "benga", employeeId: 11, salary: 9000, stockPlan: false };
let client = { firstName: "Itachi", lastName: "Uchiwa", clientId: 99, points: 100 };
function sayHello(employee) {
    console.log(`Prénom:  ${employee.firstName}`);
    console.log(`Nom:  ${employee.lastName}`);
    console.log(`Id:  ${employee.employeeId}`);
    console.log(`salary:  ${employee.salary}€`);
    console.log(`stockPlan:  ${employee.firstName}`);
}
function display(client) {
    console.log(`Prenom: ${client.clientId} `);
    console.log(`Nom: ${client.clientId} `);
    console.log(`Client Id: ${client.clientId} `);
    console.log(`Points: ${client.clientId} `);
}
sayHello(manager);
display(client);
