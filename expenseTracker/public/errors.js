//validation for the budget form 

//get the set budget button 
const BudgetButton = document.getElementById('total-amount-button');

setBudgetButton.addEventListener('click', () => {
    // Get the budget input
    const BudgetInput = document.getElementById('total-budget');

    // Perform the validation
    const budgetValue = parseFloat(BudgetInput.value);
    if (budgetValue === 0 || isNaN(budgetValue)) {
        const customAlert = document.getElementById('custom-alert');
        customAlert.style.display = 'block'; // Show the custom alert
    }
});