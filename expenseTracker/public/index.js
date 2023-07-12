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
 //display the expenses and budget to chart 
 function updateChart(budgetDisplay) {
  const CurrentBudget = document.querySelector(".budget")
  const budget = parseFloat(CurrentBudget.innerText);
  const expenseDisplay = document.querySelector(".expense_display");
  const expense = parseFloat(expenseDisplay.innerText);
  const  budgetRemain = document.querySelector(".remaininng_budget") 
  const Remain = parseFloat(budgetRemain.innerText);
  const expenseTotal = document.querySelector(".total_expense");
  const ExpenditureTotal = parseFloat(expenseTotal.innerText)
  const budgetCanvas = document.getElementById('BudgetChart');
  const chart = new Chart(budgetCanvas, {
    type: 'bar',
    data: {
      labels: ['Current Budget', 'Expenses', 'Remaining Budget' , 'Total expense'],
      datasets: [{
        label: 'Expense Chart',
        data: [budget, expense , Remain , ExpenditureTotal],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)', // Current budget bar color
          'rgba(255, 99, 132, 0.5)', // Expenses bar color
          'rgba(54, 162, 235, 0.5)', // remaining  budget bar color
          'rgba(54, 162, 235, 0.5)', // total expense   bar color

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
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
  // Call the function to update the chart
  updateChart();

       // Console checks
  console.log(productCost.value);
  console.log(remainingBudget.innerText);
  console.log(parseFloat(remainingBudget.innerText) - newExpense);

  });

