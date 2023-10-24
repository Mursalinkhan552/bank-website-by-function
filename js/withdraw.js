

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    const previousWithdrawTotal = getTextFieldById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalance = getTextFieldById('balance-total');
    const newTotalBalance = previousBalance - newWithdrawAmount;

    setTextElementValueById('balance-total', newTotalBalance);

})