const calculateBtn = document.getElementById('calculate-btn');

calculateBtn.addEventListener('click', function () {

    const incomeInputText = document.getElementById('income-input');
    const totalExpenseField = document.getElementById('total-expenses');
    const totalBalanceField = document.getElementById('total-balance');

    const foodInputText = document.getElementById('food-input');
    const rentInputText = document.getElementById('rent-input');
    const clothesInputText = document.getElementById('clothes-input');

    const totalIncome = parseInt(incomeInputText.value);
    const foodExpense = parseFloat(foodInputText.value);
    const rentExpense = parseFloat(rentInputText.value);
    const clothesExpense = parseFloat(clothesInputText.value);


    const totalExpenseAmount = foodExpense + rentExpense + clothesExpense;
    totalExpenseField.innerText = totalExpenseAmount.toFixed(1);

    
    const balance = totalIncome - totalExpenseAmount;
    totalBalanceField.innerText = balance;

});