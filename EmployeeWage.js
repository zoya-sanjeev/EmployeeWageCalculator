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