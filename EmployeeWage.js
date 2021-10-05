//UC1 IF ELSE Condition
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if( empCheck == IS_ABSENT){
        console.log("UC1 - Employee is Absent. Exiting to program");
        return;
    }else {
        console.log("UC1 - Employee is PRESENT");
    }
}

//UC2 Switch case
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let employeeHours = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck){
    case IS_PART_TIME: 
            employeeHours = PART_TIME_HOURS;
            break;
    case IS_FULL_TIME:
            employeeHours = FULL_TIME_HOURS;
            break;
    default: 
            employeeHours = 0
}
let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("UC2- Employee Wage: " + employeeWage);

//UC3
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
employeeHours = getWorkingHours(empCheck);
employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("UC3 Employee Wage: "+ employeeWage);
