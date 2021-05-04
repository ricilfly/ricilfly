let operationButtons = document.getElementsByClassName("operation-button");

let input_1 = document.getElementById("number_01");
let input_2 = document.getElementById("number_02");

function makeOperation(operationCode) {
    let number01 = Number(input_1.value);
    let number02 = Number(input_2.value);

    if (operationCode === '+') {
        var result = number01 + number02;
    } else if (operationCode === '-') {
        var result = number01 - number02;
    } else if (operationCode === '*') {
        var result = number01 * number02;
    } else if (operationCode === '/') {
        var result = number01 / number02;
    } else {
        window.alert("operation is unknown");
    }
    window.alert(result);
};

function onOperationButtonClick(eventObject) {
    let clikedElement = eventObject.currentTarget;
    let operation = clikedElement.innerHTML;
    makeOperation(operation);
};

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", onOperationButtonClick);
};