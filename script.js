function salaryCalc() {
    // Obter os valores digitados pelo usuário
    var inputNameElement = document.getElementById("inputName");
    var inputSalaryElement = document.getElementById("inputSalary");
    var inputTimeElement = document.getElementById("inputTime");

    var name = inputNameElement.value;
    var salary = inputSalaryElement.value;
    var time = inputTimeElement.value;

    // Verificar se os valores são válidos
    if (salary === "" || isNaN(salary) || time === "" || isNaN(time)) {
        alert("Please, wriew valid values for salary and daily time");
        return;
    }

    // Calcular o salário total
    var salaryTotal = salary * time;

    // Exibir o resultado na tela
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = name + " your time cost: " + salaryTotal;
    
    // Exibir o campo de resultado
    resultElement.style.display = "block";
}
