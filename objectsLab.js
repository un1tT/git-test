"use strict";
exports.__esModule = true;
var faker = require("faker");
function generateEmployee() {
    return {
        name: faker.name.firstName(),
        position: faker.name.jobType(),
        salary: faker.random.number(100000)
    };
}
function showFullSalary() {
    var employees = [];
    for (var i = 0; i < 10; i++) {
        employees.push(generateEmployee());
    }
    console.log('Employees: ', employees);
    return employees.reduce(function (acc, employee) { return acc + employee.salary; }, 0);
}
console.log(showFullSalary());
