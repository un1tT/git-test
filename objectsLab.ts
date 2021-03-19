import * as faker from 'faker';

// Вариант 9
//
// Дан список работников вида «имя, должность, заработная плата». Необходимо создать массив таких объектов (5-10) штук и написать функцию, которая выведет общую сумму затрат на персонал
//
// console.log(showFullSalary()); // 50000
interface Employee {
    name: string;
    position: string;
    salary: number;
}

function generateEmployee() {
    return {
        name: faker.name.firstName(),
        position: faker.name.jobType(),
        salary: faker.random.number(100000),
    }
}

function showFullSalary(): number {
    const employees: Employee[] = [];

    for (let i = 0; i < 10; i ++) {
        employees.push(generateEmployee());
    }

    console.log('Employees: ', employees);

    return employees.reduce((acc, employee) => acc + employee.salary, 0);
}

console.log(showFullSalary());
