class EmployeePayrollData {

    //property
    id;
    name;
    salary;
    //constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    //getter and setter
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    //method
    toString() {
        return "id="+ this.id +", name="+ this.name +", salary="+ this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());