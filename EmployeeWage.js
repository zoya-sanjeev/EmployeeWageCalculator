
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
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmployeeHours<=MAX_HOURS_IN_MONTH && 
    totalWorkingDays < NUM_OF_WORING_DAYS){
        totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHours = getWorkingHours(empCheck);
    totalEmployeeHours+= empHours;
    empDailyWageArr.push(calcDailyWage(empHours));
    empDailyHoursMap.set(totalWorkingDays,empHours);
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHours));
}
let employeeWage = calcDailyWage(totalEmployeeHours);
console.log("Total Days: "+ totalWorkingDays+" Total Hours: "+ totalEmployeeHours+" Employee Wage: "+ employeeWage);

//UC7A
let totalWage=0;
function sum(dailyWage){
    totalWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A- Total Days: "+ totalWorkingDays+ " Total hours: "
        + totalEmployeeHours + " Emp Wage: "+ totalWage);

function totalWages(totWage,dailyWage){
    return totWage + dailyWage;
}

console.log("UC7A using reduce "+ empDailyWageArr.reduce(totalWages, 0));

//UC7B
let dailyCounter = 0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage map");
console.log(mapDayWithWageArr);

//UC7C
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily wge filter when full time wage earned");
console.log(fullDayWageArr);

//UC7D
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - first full time wage was earned on:"+
            mapDayWithWageArr.find(findFullTimeWage));

//UC7E
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E - check if all elements have full time wage: "+
    fullDayWageArr.every(isAllFullTimeWage));

//UC7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F - Check if any part time wage: "+
    mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G - Number of Days Worked: "+ 
    empDailyWageArr.reduce(totalDaysWorked,0));

//UC8
console.log("UC8");
console.log(empDailyWageMap);
function totalWagesMap(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log(" Emp Wage Map totalHours: "+ 
Array.from(empDailyWageMap.values()).reduce(totalWagesMap,0));

//UC9
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHoursMap.values())
                    .filter(dailyHours => dailyHours > 0)
                    .reduce(findTotal,0);
let totalSalary = empDailyWageArr
                .filter(dailyHours => dailyHours>0)
                .reduce(findTotal,0);
console.log("UC9 - Employee wage with arrow: "+"Total Hours:"
    + totalHours+" Total Wage: "+ totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
 let fullWorkingDays = new Array();
 empDailyHoursMap.forEach((value, key, map)=>{
     if(value == 8) fullWorkingDays.push(key);
     else if( value == 4) partWorkingDays.push(key);
     else nonWorkingDays.push(key);
 });
 console.log("Full Working Days: "+ fullWorkingDays);
 console.log("Part Working Days: "+ partWorkingDays);
 console.log("Non Working Days: "+ nonWorkingDays);