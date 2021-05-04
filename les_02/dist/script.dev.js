"use strict";

var operationButtons = document.getElementsByClassName("operation-button");
var input_1 = document.getElementById("number_01");
var input_2 = document.getElementById("number_02");

function makeOperation(operationCode) {
  var number01 = Number(input_1.value);
  var number02 = Number(input_2.value);

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
}

;

function onOperationButtonClick(eventObject) {
  var clikedElement = eventObject.currentTarget;
  var operation = clikedElement.innerHTML;
  makeOperation(operation);
}

;

for (var i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", onOperationButtonClick);
}

;