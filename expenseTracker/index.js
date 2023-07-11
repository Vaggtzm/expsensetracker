//set new budget function 

//get the set budget button
 const setBudgetButton = document.getElementById('total-amount-button');

 setBudgetButton.addEventListener('click' , ()=> {
     //get the budget input 
     const budgetInput = document.getElementById('total-budget');
     const Newbudget = budgetInput.value;
    //print the expense
    let budgetDisplay = document.getElementById('amount');
    budgetDisplay.innerText = Newbudget;
 });


 //set new expense value and calculate the remaining budget 

 //get the expense  button 
 const ExpenseButton = document.getElementById('check-amount');
 // event listener for the expense button
 ExpenseButton.addEventListener('click', () => {
   // get the expense input
   const productCost = document.getElementById('expense_value');
   // get the expenditure display
   let expenseDisplay = document.getElementById('expense_display');
   // read the value of the expense input
   const newExpense = productCost.value;
   // then update the expenditure display
   expenseDisplay.innerText = newExpense;
 
   // calculate the remaining budget and total expense
   // get the remaining budget display
   const RemainingBudget = document.getElementById('Remaining_budget');
   // get the budget display
   const TotalBudget = document.getElementById('amount');
   // perform the subtraction
   if (RemainingBudget.innerText > 0) {
     RemainingBudget.innerText = parseFloat(RemainingBudget.innerText) - parseFloat(productCost.value);
   } else {
     RemainingBudget.innerText = TotalBudget.innerText - newExpense;
   }
 
   // calculate the total expense
   const expenseFull = document.getElementById('total_expense');
   expenseFull.innerText = parseFloat(expenseDisplay.innerText) + parseFloat(productCost.value);
 
   // console checks
   console.log(productCost.value);
   console.log(RemainingBudget.innerText);
   console.log(parseFloat(RemainingBudget.innerText) - parseFloat(productCost.value));
 });