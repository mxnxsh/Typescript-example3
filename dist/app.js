"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.name = name;
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return {
            name,
        };
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Account');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // getter
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report found');
    }
    // setter
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass valid value');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === ('Manish' || 'manish'))
            return;
        this.employees.push(name);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReport() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Manish');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('D1', ['Mayank', 'Manish', 'Bhushan']);
it.addEmployee('Manish');
it.addEmployee('Mayank');
// console.log('it=>', it);
it.describe();
it.name = 'New Name';
it.printEmployeeInformation();
console.log(it);
// const accountCopy = { name: 'Dummy', describe: it.describe };
// accountCopy.describe();
const accounting = new AccountingDepartment('D2', []);
accounting.mostRecentReport = 'Report2';
accounting.addReport('Report1');
console.log(accounting.mostRecentReport);
accounting.printReport();
accounting.addEmployee('Manish');
accounting.addEmployee('manisha');
accounting.printEmployeeInformation();
console.log(accounting);
