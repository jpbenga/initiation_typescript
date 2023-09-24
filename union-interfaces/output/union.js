"use strict";
let employee = { firstName: "jean-paul", lastName: "benga", employeeId: 11, salary: 9000, stockPlan: false };
function sayHello(employee) {
    console.log(`Prénom:  ${employee.firstName}`);
    console.log(`Nom:  ${employee.lastName}`);
    console.log(`Id:  ${employee.employeeId}`);
    console.log(`salary:  ${employee.salary}€`);
    console.log(`stockPlan:  ${employee.firstName}`);
}
sayHello(employee);
