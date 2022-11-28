const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');

//get input value
function getInputValue(inputId) {

    const inputText = document.getElementById(inputId);

    const inputValue = parseInt(inputText.value);

    inputText.value = '';
    return inputValue;

}

//get element
function getElement(element) {
    return document.getElementById(element);
}

//calculate total expenses and balance
function calculate() {
    const incomeInput = getElement('income-input');
    const totalExpenseField = getElement('total-expenses');
    const totalBalanceField = getElement('total-balance');

    const totalIncome = parseInt(incomeInput.value);

    const foodExpense = getInputValue('food-input');
    const rentExpense = getInputValue('rent-input');
    const clothesExpense = getInputValue('clothes-input');

    if (isNaN(totalIncome) || totalIncome == '' || totalIncome < 0) {
        incomeInput.value = '';
        return alert("You are required to enter a positive amount");
    }
    else if (isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense)) {
        totalBalanceField.innerText = totalIncome;
        return alert("You are required to enter a valid number");
    }

    else if (foodExpense < 0 || rentExpense < 0 || clothesExpense < 0) {
        return alert("You are required to enter a positive number");
    }

    else {
        const totalExpenseAmount = foodExpense + rentExpense + clothesExpense;
        totalExpenseField.innerText = totalExpenseAmount;

        if (totalExpenseAmount > totalIncome) {
            totalExpenseField.innerText = 0;
            return alert("You can not expense more than your income");
        }
        else {
            const balance = totalIncome - totalExpenseAmount;
            totalBalanceField.innerText = balance;
        }

    }

}

calculateBtn.addEventListener('click', function () {
    calculate();
});


//calculate saving & remaining amount
saveBtn.addEventListener('click', function () {

    const totalIncome = getInputValue('income-input');
    const percentageOfSavingAmount = getInputValue('save-input');
    const savingAmountField = getElement('saving-amount');
    const remainingBalance = getElement('remaining-balance');
    const totalBalanceField = getElement('total-balance');
    const totalBalanace = parseInt(totalBalanceField.innerText);

    if (isNaN(totalIncome)) {
        return;
    }
    else {
        const savingAmount = totalIncome * (percentageOfSavingAmount / 100);
        
        if (isNaN(percentageOfSavingAmount)) {
            savingAmountField.innerText = 0;
            remainingBalance.innerText = totalBalanace - parseInt(savingAmountField.innerText);
        }
        else if (percentageOfSavingAmount < 0) {
            return alert("Saving amount can not be a negative number");
        }
        else if (savingAmount > totalBalanace) {
            return alert("You don't have enough balance to save");
        }
        else {
            savingAmountField.innerText = savingAmount;

            remainingBalance.innerText = totalBalanace - savingAmount;
        }

    }

});