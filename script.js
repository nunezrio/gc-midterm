class Budget {
  constructor() {
    this.weeklyBudget = 0;
    this.items = [];
  }
  add(description, cost, category) {
    let expense = new Item(description, cost, category);
    this.items.push(expense);
  }

  getTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += Number(item.cost);
    });
    console.log(total);
    return total;
  }

  categoryTotals() {
    let categoryTotals = {
      entertainment: 0,
      food: 0,
      clothing: 0,
      bills: 0
    };
    this.items.forEach(item => {
      if (item.category === "entertainment") {
        categoryTotals.entertainment += Number(item.cost);
      } else if (item.category === "food") {
        categoryTotals.food += Number(item.cost);
      } else if (item.category === "clothing") {
        categoryTotals.clothing += Number(item.cost);
      } else {
        categoryTotals.bills += Number(item.cost);
      }
    });
    return categoryTotals;
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
    elMsg.innerText = `You have $${budgetAmtEl.value} left to spend this week.`;
  } else {
    elMsg.innerText = `You have no money left. You are broke. Stop spending money.`;
  }

  budgetForm.style.display = "none";
  elMsg.style.display = "block";

  budget.weeklyBudget = parseFloat(budgetAmtEl.value);

  console.log(weeklyBudget);

  console.log(budget);

  budgetForm.style.display = "none";
}
let budgetForm = document.querySelector(".budget");
budgetForm.addEventListener("submit", getBudgetAmt);

let item = new Item();

const purchaseFormEl = document.querySelector(".purchases");

purchaseFormEl.addEventListener("submit", addExpense);

function addExpense(e) {
  e.preventDefault();
  const purchaseFormData = new FormData(purchaseFormEl);
  budget.add(
    purchaseFormData.get("item"),
    purchaseFormData.get("cost"),
    purchaseFormData.get("category")
  );
  console.log(budget);
  purchaseFormEl.reset();

  let remaining = Number(budget.weeklyBudget) - Number(budget.getTotal());
  console.log(remaining);

  let elMsg = document.querySelector(".displayBudget");
  if (remaining > 0) {
    elMsg.innerText = `You have $${remaining} left to spend this week.`;
  } else {
    elMsg.innerText = `You have no money left. You are broke. Stop spending money`;
  }
  let categoryTotals = budget.categoryTotals();

  let entertainment = document.querySelector(".displayEntertainment");
  entertainment.innerText = `Entertainment: $${categoryTotals.entertainment}`;
  let food = document.querySelector(".displayFood");
  food.innerText = `Food: $${categoryTotals.food}`;
  let clothing = document.querySelector(".displayClothing");
  clothing.innerText = `Clothing: $${categoryTotals.clothing}`;
  let bills = document.querySelector(".displayBills");
  bills.innerText = `Bills: $${categoryTotals.bills}`;
}
