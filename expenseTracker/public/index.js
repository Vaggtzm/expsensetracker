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

// Set initial total expense to 0
let totalExpense = 0;

// Get the expense button
const expenseButton = document.getElementById('check-amount');

// Event listener for the expense button
expenseButton.addEventListener('click', () => {
  // Get the expense input
  const productCost = document.getElementById('expense_value');

  // Get the expenditure display
  const expenseDisplay = document.getElementById('expense_display');

  // Read the value of the expense input
  const newExpense = parseFloat(productCost.value);

  // Update the expenditure display
  expenseDisplay.innerText = newExpense;

  // Calculate the remaining budget and total expense
  // Get the remaining budget display
  const remainingBudget = document.getElementById('Remaining_budget');

  // Get the budget display
  const totalBudget = document.getElementById('amount');

  // Perform the subtraction for remaining budget
  if (parseFloat(remainingBudget.innerText) > 0) {
    remainingBudget.innerText = parseFloat(remainingBudget.innerText) - newExpense;
  } else {
    remainingBudget.innerText = parseFloat(totalBudget.innerText) - newExpense;
  }

  // Add the new expense to the total expense
  totalExpense += newExpense;

  // Update the total expense display
  const expenseFull = document.getElementById('total_expense');
  expenseFull.innerText = totalExpense;
  //get the product title
  const productTitle = document.getElementById('product-title');
  //print the expense list 
    
      const expsenseList = document.getElementById('expsenseList');
      const listItem = document.createElement('li');
      listItem.innerText = `${productTitle.value}: $${productCost.value}`;
      expsenseList.appendChild(listItem);
       // Console checks
  console.log(productCost.value);
  console.log(remainingBudget.innerText);
  console.log(parseFloat(remainingBudget.innerText) - newExpense);

  });


