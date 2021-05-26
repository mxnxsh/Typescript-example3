class Department {
  static fiscalYear = 2021;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return {
      name,
    };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');

    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, 'Account');
    this.lastReport = reports[0];
  }

  // getter
  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found');
  }
  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass valid value');
    }
    this.addReport(value);
  }

  addEmployee(name: string) {
    if (name === ('Manish' || 'manish')) return;
    this.employees.push(name);
  }

  addReport(report: string) {
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
