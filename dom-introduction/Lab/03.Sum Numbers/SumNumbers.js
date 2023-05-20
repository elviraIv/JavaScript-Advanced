function calc() {
    let firstInputElement = document.getElementById('num1');
    let secondtInputElement = document.getElementById('num2');

    let firstNumber = Number(firstInputElement.value);
    let secondNumber = Number(secondtInputElement.value);

    let sum = firstNumber + secondNumber;
    
    let resultElemet = document.getElementById('sum');
    resultElemet.value = sum;

}
