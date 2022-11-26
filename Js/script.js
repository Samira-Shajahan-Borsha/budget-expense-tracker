const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');

//get input value
function getInputValue(inputId) {

    const inputText = document.getElementById(inputId);

    const inputValue = parseInt(inputText.value);

    inputText.value = '';
    return inputValue;

}

//calculate total expenses and balance
function calculate() {
    const incomeInput = document.getElementById('income-input');
    const totalExpenseField = document.getElementById('total-expenses');
    const totalBalanceField = document.getElementById('total-balance');

    const totalIncome = parseInt(incomeInput.value); 

    const foodExpense = getInputValue('food-input');
    const rentExpense = getInputValue('rent-input');
    const clothesExpense = getInputValue('clothes-input');

    if (isNaN(totalIncome) || isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense)) {
        return alert("You are required to enter a valid number");
    }

    else if (totalIncome < 0 || foodExpense < 0 || rentExpense < 0 || clothesExpense < 0) {
        return alert("You are required to enter a positive number");
    }

    else {
        const totalExpenseAmount = foodExpense + rentExpense + clothesExpense;
        totalExpenseField.innerText = totalExpenseAmount;

        const balance = totalIncome - totalExpenseAmount;
        totalBalanceField.innerText = balance;
    }

}

calculateBtn.addEventListener('click', function () {
    calculate();
});



saveBtn.addEventListener('click', function () {
    const totalIncome = getInputValue('income-input');
    const percentageOfSavingAmount = getInputValue('save-input');
    const savingAmountField = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const totalBalanceField = document.getElementById('total-balance');

    if (percentageOfSavingAmount > 0) {
        const savingAmount = totalIncome * 0.2;
        savingAmountField.innerText = savingAmount;

        remainingBalance.innerText = parseInt(totalBalanceField.innerText) - savingAmount;
    }

});