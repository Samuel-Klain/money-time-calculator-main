function salaryCalc() {

    //data collect
    var inputNameElement = document.getElementById("inputName");
    var inputSalaryElement = document.getElementById("inputSalary");
    var inputTimeElement = document.getElementById("inputTime");
    var inputDayElement = document.getElementById("inputDay");

    // data formact
    var name = inputNameElement.value;
    var salary = parseFloat(inputSalaryElement.value);
    var time = parseFloat(inputTimeElement.value);
    var daily = parseFloat(inputDayElement.value);

    // Error message
    if (isNaN(salary) || isNaN(time) || isNaN(daily) || salary <= 0 || time <= 0 || daily <= 0) {
        alert("Please, write valid values for salary, daily time, and time.");
        return;
    }

    //find out how much you earn per hour
    var hourMonth = salary / daily;

    var timeValue = time / hourMonth;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = name + " this product is worth: " + timeValue.toFixed(1) + " hours of you time ";

    resultElement.style.display = "block";
}
