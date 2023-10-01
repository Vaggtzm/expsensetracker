//function to set new current budget
//get all the elements
let SaveBudgetBtn = document.getElementById("SaveBudget");
//get the current budget display 

//listen for the click and update the current budget 
SaveBudgetBtn.addEventListener('click' , ()=> {
    let addBudgetInput = document.getElementById("CurrentBudget");
    let CurrentBudgetDisplay = document.getElementById("BudgetDisplay");

    //read the inner text of the budget input 
    let NewBudget = addBudgetInput.value;
    //update the current Budget display 
    CurrentBudgetDisplay.innerText = NewBudget;
});


let SaveExpense = document.getElementById("SaveExpense");
//function to save the expenses     
SaveExpense.addEventListener('click' , ()=>{
  //  get the elements 
    let productCost = document.getElementById("productCost")
    let BudgetDisplay = document.getElementById("BudgetDisplay");
    let TotalExpenseDisplay = document.getElementById("TotalExpenseDisplay");
    //update the total expense display 
    if(TotalExpenseDisplay.innerText === 0){
        TotalExpenseDisplay.innerText = newTotalExpense;    
    }
    // subtract the total budget if the budget display is bigger than 0 
   if(BudgetDisplay.innerText > 0){
    let BudgetDisplaySub = parseFloat(BudgetDisplay.innerText) - parseFloat(TotalExpenseDisplay.innerText);
    BudgetDisplay.innerText= BudgetDisplaySub; 
   }
   //add the prev expense to the new one 
   if (TotalExpenseDisplay.innerText > 0){
     TotalExpenseDisplay.innerText = parseFloat( productCost.value) + parseFloat(TotalExpenseDisplay.innerText);
   }    
});