// Function to set new current budget
let SaveBudgetBtn = document.getElementById("SaveBudget");

SaveBudgetBtn.addEventListener('click', () => {
    //add budget input
    let addBudgetInput = document.getElementById("CurrentBudget");
    let CurrentBudgetDisplay = document.getElementById("BudgetDisplay");
    let NewBudget = addBudgetInput.value;
    CurrentBudgetDisplay.innerText = NewBudget;
    //add credit cart input
    let addCreditInput = document.getElementById("ActiveCart");
    let CreditDisplay = document.getElementById("CreditDisplay");
    let NewCredit = addCreditInput.value;
    CreditDisplay.innerText = NewCredit;

});
//chart js display 




//functions to set the expenses
let SaveExpense = document.getElementById("SaveExpense");

SaveExpense.addEventListener('click', () => {
  let productCost = document.getElementById("productCost");
  let CurrentBudget = document.getElementById("BudgetDisplay");
  let TotalExpense = document.getElementById("TotalExpenseDisplay");

  let productCostValue = parseFloat(productCost.value) || 0;
  let currentBudgetValue = parseFloat(CurrentBudget.innerText) || 0;
  let totalExpenseValue = parseFloat(TotalExpense.innerText) || 0;

  // Ensure productCostValue is not NaN and the budget is sufficient
  if (productCostValue > 0 && currentBudgetValue >= productCostValue) {
      // Check if TotalExpense is zero or not and perform the appropriate action
      if (totalExpenseValue === 0) {
          TotalExpense.innerText = productCostValue.toFixed(1);
      } else {
          TotalExpense.innerText = (totalExpenseValue + productCostValue).toFixed(1);
      }

      // Subtract the remaining budget
      CurrentBudget.innerText = (currentBudgetValue - productCostValue).toFixed(1);
  }

  // console checks
  console.log(TotalExpense.innerText);
  console.log(productCost.value)
  console.log((totalExpenseValue + productCostValue).toFixed(2))
  
  //get the inputs of the list 
  let ProductName = document.getElementById("productName").value;
  let productCategory = document.getElementById("productCategory").value;
  //check the inputs 
  if(productCategory && ProductName){
    let ProductDiv = document.createElement("div");
    ProductDiv.innerHTML = `
    <div class = "d-flex flex-column text-center ">
    <span class = "d-flex flex-row">
    <strong>Product Name:</strong> ${ProductName}
    </span>
    <span class = "d-flex flex-row"> 
    <strong>Category :</strong> ${productCategory} 
    </span>
    <span class = "d-flex flex-row">
    <strong>Cost :</strong>${productCost.value}
    </span>

    </div> `
    //append the new div to the expense list 
    document.getElementById("ExpensesList").appendChild(ProductDiv);
    //clear the inputs
   // document.getElementById("productName").value = "";
   // document.getElementById("productCategory").value = "";
  } else{
    //handle an empty inpute case 
    alert("please enter both input and category");
  }

});

//incomes function 

let saveIncomeBtn = document.getElementById("SaveIncome");

saveIncomeBtn.addEventListener("click" , ()=> {
  let IncomeCost = document.getElementById("IncomeNumber");
  let CurrentBudget = document.getElementById("BudgetDisplay");
  let IncomeType = document.getElementById("IncomeType");
  let incomeDisplay = document.getElementById("TotalIncome");
  //income conversion to a number
  let incomeNumber = parseFloat(IncomeCost.value);
  //budget conversion to a number
  //read the value of the income
    let NewIncome = IncomeCost.value;
    //if the income value is biger than zero add the new income to previous
    if(parseFloat(incomeDisplay.innerText)  > 0){
      let TotalIncomeValue = parseFloat(IncomeCost.value);
      let prevIncomeValue = parseFloat(incomeDisplay.innerText) ;
      incomeDisplay.innerText = TotalIncomeValue + prevIncomeValue;
    } else{ //else print the new income 
      incomeDisplay.innerText = NewIncome;
    }
    if(parseFloat(CurrentBudget.innerText)>0){
      let budgetNumber = parseFloat(CurrentBudget.innerText);
      let TotalIncomeValue = parseFloat(IncomeCost.value);
      CurrentBudget.innerText = budgetNumber + TotalIncomeValue;
    }
    //print the incomes into a list
    if(IncomeType && IncomeCost){
      let incomeDiv = document.createElement("div");
      incomeDiv.innerHTML = 
      `<div class = "d-flex flex-column text-center ">
      <span class = "d-flex flex-row">
      <strong>Income Cost:</strong> ${incomeDisplay.innerText}
      </span>
      <span class = "d-flex flex-row"> 
      <strong>Category :</strong> ${IncomeType.value} 
      </span>
       </div>
      `
      //append the new div
      document.getElementById("IncomeList").appendChild(incomeDiv);
    } else{
      alert("please enter both input and category");
    }
})


//generate a chart with the month analytics 
