


function getInputFieldById(inputId){
    const depositField = document.getElementById(inputId);
    const depositFieldString = depositField.value;
    const currentDepositField = parseFloat(depositFieldString);
    depositField.value = '';
    return currentDepositField
}

function getTextFieldById(elementId){
    const depositTotal = document.getElementById(elementId);
    const depositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalString);
    return previousDepositTotal;
  
}


function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
    

}