function remaining_age_calculator(age){
    var remaining_age = 60-age;
    var years = remaining_age * 365;
    var weeks = remaining_age * 52;
    var months = remaining_age * 12;

    console.log("Your remaining age in years is" + years + " years, " + weeks +" weeks and " + months+" months");
}
remaining_age_calculator(20);