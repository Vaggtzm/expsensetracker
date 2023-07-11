

//input data for the set buget form 

const totalAmount = document.getElementById('total-amount');

//expense data for the expsense form 


//buttons

let setBugetButton = document.getElementById('total-amount-button');
let checkAmountButton = document.getElementById("check-amount");

//output display 


//set budget function 
setBugetButton.addEventListener('click' , ()=>{
  const balance = document.getElementById('balance-amount');

  //add new budget 
  const NewBudget = totalAmount.value;
  amount.innerText =  totalAmount.value;
  //error

})

//expsense and ballance calculations
  checkAmountButton.addEventListener('click', () => {
    //variables
    const product_cost = document.getElementById('product_cost');
    const productTitle = document.getElementById("product-title");
    const expenditure = document.getElementById('expenditure-value');
    const amount = document.getElementById('amount');
    const balance = document.getElementById('balance-amount');

    // Print the expenditure
    const newExpenditure = parseFloat(product_cost.value);
    expenditure.innerText = newExpenditure;
    // Calculate the balance
    const newBallance = parseFloat(newExpenditure);
    const NewAmount = parseFloat(amount.innerText);
    console.log(NewAmount - newExpenditure);
    balance.innerText = (NewAmount - newExpenditure);
    //print the expsenses
     const expsenseList = document.getElementById('expsenseList');
     const listItem = document.createElement('li');
     listItem.innerText = `${productTitle.value}: $${product_cost.value}`;
     expsenseList.appendChild(listItem);
  });
