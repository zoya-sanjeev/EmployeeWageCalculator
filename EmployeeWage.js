{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if( empCheck == IS_ABSENT){
        console.log(" Employee is Absent. Exiting to program");
        return;
    }else {
        console.log("Employee is PRESENT");
    }
}

//UC2 Switch case
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empCheck = Math.floor(Math.random() * 10) % 3;
let employeeHours = getWorkingHours(empCheck);
let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Employee Wage: "+ employeeWage);
