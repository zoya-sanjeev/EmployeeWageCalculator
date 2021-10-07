
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

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
let totalWorkingDays = 0;
let empDailyHoursAndWageArr = new Array()

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmployeeHours<=MAX_HOURS_IN_MONTH && 
    totalWorkingDays < NUM_OF_WORING_DAYS){
        totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHours = getWorkingHours(empCheck);
    totalEmployeeHours+= empHours;
    empDailyHoursAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHours,
            dailyWage: calcDailyWage(empHours),
            toString(){
                return '\nDay' + this.dayNum +'=> Working Hours is '
                + this.dailyHours + ' And Wage Earned =' + this.dailyWage
            },
        });
}
let employeeWage = calcDailyWage(totalEmployeeHours);
console.log("Total Days: "+ totalWorkingDays+" Total Hours: "+ totalEmployeeHours+" Employee Wage: "+ employeeWage);

//UC10
console.log("UC10 Daily hours worked and wage earned:"+ empDailyHoursAndWageArr);

//UC11A to UC11D

let totalWages = empDailyHoursAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);
let totalHours = empDailyHoursAndWageArr
                .filter(dailyHrsAndWage=> dailyHrsAndWage.dailyWage > 0)
                .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours,0);
console.log("UC11 Total Hours:" + totalHours+" Total Wage: "+ totalWages);