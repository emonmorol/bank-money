document.getElementById('deposite-button').addEventListener('click',function(){
    // get the amount deposited 
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmount = depositeInput.value;

    //Update deposite total;
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmount = depositeTotal.innerText;
    const newDepositeTotal = parseFloat(previousDepositeAmount) + parseFloat(newDepositeAmount);
    depositeTotal.innerText = newDepositeTotal;

    //Update account balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousbalanceTotal + parseFloat(newDepositeAmount);
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposite input value
    depositeInput.value = '';
})



document.getElementById('withdraw-button').addEventListener('click',function(){
    // get the amount withdrawed 
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    //Update withdraw total;
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;

    //Update account balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousbalanceTotal - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal;
    // clear the withdraw input value
    withdrawInput.value = '';
})