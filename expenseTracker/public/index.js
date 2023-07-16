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


