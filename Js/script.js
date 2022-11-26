//button
const calculateBtn = document.getElementById('calculate-btn');

//get input value
function getInputValue(inputId) {

    const inputText = document.getElementById(inputId);

    const inputValue = parseInt(inputText.value);

    inputText.value = '';
    return inputValue;


}
//calculate total expenses and balance
function calculate() {

    const totalExpenseField = document.getElementById('total-expenses');
    const totalBalanceField = document.getElementById('total-balance');

    const totalIncome = getInputValue('income-input');

    const foodExpense = getInputValue('food-input');
    const rentExpense = getInputValue('rent-input');
    const clothesExpense = getInputValue('clothes-input');

    const totalExpenseAmount = foodExpense + rentExpense + clothesExpense;
    totalExpenseField.innerText = totalExpenseAmount;

    const balance = totalIncome - totalExpenseAmount;
    totalBalanceField.innerText = balance;


}

calculateBtn.addEventListener('click', function () {
    calculate();
});