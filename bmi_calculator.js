function bmi_calculator(weight, height){
    var BMI = weight / Math.pow(height, 2);
    return Math.round(BMI);
}
var bmi = bmi_calculator(65, 1.8);
console.log("your bmi is " + bmi);