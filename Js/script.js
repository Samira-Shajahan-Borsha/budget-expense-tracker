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

    if (isNaN(totalIncome) || isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense)) {
        incomeInput.value = '';
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


//calculate saving & remaining amount
saveBtn.addEventListener('click', function () {

    const totalIncome = getInputValue('income-input');
    const percentageOfSavingAmount = getInputValue('save-input');
    const savingAmountField = getElement('saving-amount');
    const remainingBalance = getElement('remaining-balance');
    const totalBalanceField = getElement('total-balance');

    if (isNaN(totalIncome)) {
        return;
    }
    else if (percentageOfSavingAmount > 0) {
        const savingAmount = totalIncome * 0.2;
        savingAmountField.innerText = savingAmount;

        remainingBalance.innerText = parseInt(totalBalanceField.innerText) - savingAmount;
    }

});