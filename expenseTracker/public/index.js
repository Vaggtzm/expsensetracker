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

// Store the remaining budget as a variable
let remainingBudgetValue = parseFloat(remainingBudget.innerText);

// Perform the subtraction for remaining budget
if (remainingBudgetValue > 0) {
  remainingBudgetValue -= newExpense;
} else {
  remainingBudgetValue = parseFloat(totalBudget.innerText) - newExpense;
}

// Update the remaining budget display
remainingBudget.innerText = remainingBudgetValue;

// Check if remaining budget is 0 and provide a warning
if (remainingBudgetValue === 0) {
  // Disable the "Add Expense" functionality or show a message to the user
  // instead of using an alert
  window.alert("Warning: Your budget is 0");
}

// Add the new expense to the total expense
totalExpense += newExpense;

// Update the total expense display
const expenseFull = document.getElementById('total_expense');
expenseFull.innerText = totalExpense;
  // Get the product title
const productTitle = document.getElementById('product-title');

// Get the product description
const productDescription = document.getElementById('product-description');

// Get the product table body
const productList = document.getElementById('product-list');

// Create a new table row
const row = document.createElement('tr');

// Create table cells for title, description, and cost
const titleCell = document.createElement('td');
titleCell.innerText = productTitle.value;

const descriptionCell = document.createElement('td');
descriptionCell.innerText = productDescription.value;

const costCell = document.createElement('td');
costCell.innerText = `$${productCost.value}`;

// Append the cells to the row
row.appendChild(titleCell);
row.appendChild(descriptionCell);
row.appendChild(costCell);

// Append the row to the table body
productList.appendChild(row);
  });


