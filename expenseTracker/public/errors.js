//validation for the budget form 

//get the set budget button 
const BudgetButton = document.getElementById('total-amount-button');

setBudgetButton.addEventListener('click', () => {
    // Get the budget input
    const BudgetInput = document.getElementById('total-budget');

    // Perform the validation
    const budgetValue = parseFloat(BudgetInput.value);
    if (budgetValue === 0 || isNaN(budgetValue)) {
        const customAlert = document.querySelector('.alertBudget');
        customAlert.style.display = 'block'; // Show the custom alert
    }else{
        customAlert.style.display = 'none'; // Show the custom alert

    }
});

//get the set amount button 

const CheckAmountButton = document.getElementById('check-amount');

CheckAmountButton.addEventListener('click', ()=>{
    //get the inputs 
    const ProductCost_input = document.getElementById("product-title");
    const ExpenseValue = document.getElementById('expense_value');

    //perform the validation for the product cost
    expenseNumber = parseFloat(ExpenseValue.value);
    if(expenseNumber === 0 || isNaN(expenseNumber)){
        const customAlert = document.querySelector('.alertAmount');
        customAlert.style.display = 'block'; // Show the custom alert

    } else{
                customAlert.style.display = 'none'; // Show the custom alert

    }
});