function leap_year(year){
    if (year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0) {
                alert(year + "is a leap year");
            }
            else {
                alert(year + "is not a leap year");
            }
        }
        else {
            alert(year + "is a leap year");
        } 
    } 
    else {
            alert(year + "is not a leap year");
        }
     
}
var year = prompt("Enter year to check weather it's a leap year or not");
leap_year(year);