// get the elements

let alertClose = document.getElementById("CloseAlert");
let budgetStringDisplay = document.getElementById("BudgetDisplay");

//convert the budget to a number 

let budgetValue = parseFloat(budgetStringDisplay.innerText || budgetStringDisplay.textContent );

if(budgetValue <= 0){
    //get the alert box and display it
    let alertBox = document.getElementById("alertBudget");
    alertBox.style.display = "block";
        // close the alert button on click 
    alertClose.addEventListener("click" , function(){
        alertBox.style.display = "none"
    });
}