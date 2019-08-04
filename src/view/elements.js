export var domAvailableBudjet = null;
export var domBudgetIncome = null;
export var domBudgetExpences = null;
export var domAddBtn = 66;
export var domAddValue = null;
export var domAddType = null;
export var domAddDescription = null;
export var domIncomeList = null;
export var domExpensesList = null;
document.addEventListener('DOMContentLoaded', () => {
  domAvailableBudjet = document.querySelector('.budget__value');
  domBudgetIncome = document.querySelector('.budget__income');
  domBudgetExpences = document.querySelector('.budget__expences');
  domAddBtn = document.querySelector('.add__btn');
  domAddValue = document.querySelector('.add__value');
  domAddType = document.querySelector('.add__type');
  domAddDescription = document.querySelector('.add__description');
  domIncomeList = document.querySelector('.income__list');
  domExpensesList = document.querySelector('.expenses__list');
})