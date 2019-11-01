class Budget {
  constructor(amount) {
    this.weeklyBudget = amount;
    // this.bills = bills;  INstead of these, add Rion's array stuff
    // this.clothes = clothes;
    // this.food = food;
    // this.entertainment = entertainment;
  }
}
function getBudgetAmt(e) {
  e.preventDefault();
  console.log("function ran!");
  let budgetAmt = document.getElementById("weeklyBudget");
  let elMsg = document.querySelector(".displayBudget");
  if (budgetAmt.value > 0) {
    elMsg.innerText = `You have ${budgetAmt.value} left to spend this week.`;
  } else {
    elMsg.innerText = `You have no money left. You are broke. Stop spending money`;
  }

  budget.style.display = "none";
  elMsg.style.display = "block";
}
let budget = document.querySelector(".budget");
budget.addEventListener("submit", getBudgetAmt);

// function calcTotal () {
//     let budgetInput = document.querySelector(".budget").weeklyBudget.value;
//     budgetInput - (this.bills + this.clothes + this.food + this.entertainment)
//
// }

// }
