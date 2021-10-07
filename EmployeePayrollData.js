class EmployeePayrollData {

    //property
    id;
    name;
    gender;
    startDate;
    salary;
    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    //getter and setter
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect';
    }
    get id() { return this._id; }
    set id(id) {
        let regxId = RegExp('^[1-9][0-9]*$');
        if (regxId.test(id))
            this._id = id;
        else
            throw "Id is incorrect";
    }
    get salary() { return this._salary; }
    set salary(salary) {
        let regxSalary = RegExp('^[1-9][0-9]*$');
        if (regxSalary.test(salary))
            this._salary = salary;
        else
            throw "Salary is incorrect";
    }
    get gender() { return this._gender; }
    set gender(gender) {
        let rgxGender = RegExp('^[M|F]$');
        if (rgxGender.test(gender))
            this._gender = gender;
        else 
            throw "Gender is incorrect";
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this._startDate = startDate;
    }


    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id="+ this.id +", name="+ this.name +", salary="+ this.salary+", gender="+ this.gender+", start date="+ empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(2, "Terisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());