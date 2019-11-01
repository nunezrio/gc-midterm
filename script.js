class Budget {
  constructor() {
    this.weeklyBudget = 0;
    this.items = [];
  }
  add(description, cost, category) {
    let expense = new Item(description, cost, category);
    this.items.push(expense);
  }
}

class Item {
  constructor(description, cost, category) {
    this.description = description;
    this.cost = cost;
    this.category = category;
  }
}

const budget = new Budget();

function getBudgetAmt(e) {
  e.preventDefault();
  console.log("function ran!");
  let budgetAmtEl = document.getElementById("weeklyBudget");
  let elMsg = document.querySelector(".displayBudget");
  if (budgetAmtEl.value > 0) {
    elMsg.innerText = `You have ${budgetAmtEl.value} left to spend this week.`;
  } else {
    elMsg.innerText = `You have no money left. You are broke. Stop spending money`;
  }

  budgetForm.style.display = "none";
  elMsg.style.display = "block";

  budget.weeklyBudget = parseFloat(budgetAmtEl.value);

  // converts string to number

  console.log(weeklyBudget);

  // set the weeklyBudget property of the budget object using the value
  // from the budgetAmtEl.
  // let weeklyBudget.value =

  console.log(budget);

  budgetForm.style.display = "none";
  // Alicia, put your code here :D
}
let budgetForm = document.querySelector(".budget");
budgetForm.addEventListener("submit", getBudgetAmt);

// function calcTotal () {
//     let budgetInput = document.querySelector(".budget").weeklyBudget.value;
//     budgetInput - (this.bills + this.clothes + this.food + this.entertainment)
//
// }

// }

// Classes for Purchases and Item

const expense = document.querySelector(".purchases");
console.log(expense);
expense.addEventListener("submit", e => {
  e.preventDefault();
  console.log(expense);
  const expenseData = new Purchases(expense);
  add(
    expenseData.get("category"), // access input values by name
    expenseData.get("cost")
  );
  // form.reset(); // clears the form
  clg(expense);
});

// const expense = new Purchases();

// expense.add("Movie Tickets", "20", "Entertainment");
// console.log(expense);

// let radios = document.getElementsByClassName('itemInput');

// for (let i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//         add(radios[i].value);

//     }

const expenseList = document.createElement("div");
expenseList.classList.add("expenses");

const formData = new Item();

// function purchasesDisplay() {
//   expense.category.forEach((category, cost) => {
//     const newExpense = document.createElement("div");
//     newExpense.classList.add("expense");
//     newExpense.innerText = `
//       <p>Name: ${contact.name}</p>
//       <p>Email: ${contact.email}</p>
//       <p>Phone: ${contact.phone}</p>
//       <p>Relation: ${contact.relation}</p>
//       <i class="fa fa-trash" data-index-number=${index}" aria-hidden="true"></li>`;
//     document.querySelector("#contact-list").appendChild(newEntry);
//   });
// }
