export var domAvailableBudget = null;
export var domBudgetIncome = null;
export var domBudgetExpenses = null;
export var domAddBtn = 66;
export var domAddValue = null;
export var domAddType = null;
export var domAddDescription = null;
export var domIncomeList = null;
export var domExpensesList = null;
export var domContainer = null

document.addEventListener('DOMContentLoaded', () => {
  domAvailableBudget = document.querySelector('.budget__value');
  domBudgetIncome = document.querySelector('.budget__income--value');
  domBudgetExpenses = document.querySelector('.budget__expenses--value');
  domAddBtn = document.querySelector('.add__btn');
  domAddValue = document.querySelector('.add__value');
  domAddType = document.querySelector('.add__type');
  domAddDescription = document.querySelector('.add__description');
  domIncomeList = document.querySelector('.income__list');
  domExpensesList = document.querySelector('.expenses__list');
  domContainer = document.querySelector('.container');
})