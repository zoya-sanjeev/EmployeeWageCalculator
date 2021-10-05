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

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORING_DAYS = 20;

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

let totalEmployeeHours = 0;
for (let day = 0; day < NUM_OF_WORING_DAYS; day++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmployeeHours+= getWorkingHours(empCheck);
}
let employeeWage = totalEmployeeHours * WAGE_PER_HOUR;
console.log("Hour: "+ totalEmployeeHours+"Employee Wage: "+ employeeWage);
