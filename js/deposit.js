




// Event Handler Added

document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputFieldById('deposit-field');
    const previousDepositTotal = getTextFieldById('deposit-total');

    const newDepositTotal =  previousDepositTotal + newDepositAmount ; 
    
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalance = getTextFieldById('balance-total');

    const newTotalBalance = previousBalance + newDepositAmount;
    setTextElementValueById('balance-total', newTotalBalance);


    
})