var incomeList = [];
var expensesList = [];
var totalIncome = 0;
var totalExpenses = 0;
var budgetAvailable = 0;

export function getBudgetAvailable() {
  return getTotalIncome() - getTotalExpenses();
}

export function getTotalExpenses() {

  let sum = expensesList.reduce((prev, curr) => {
    return curr.amount + prev
  }, 0);

  return sum

}

export function getTotalIncome() {
  return incomeList.reduce((prev, curr) => {
    return curr.amount + prev
  }, 0);
}

export function getIncomeList() {

}

export function getExpensesList() {

}

export function addNewIncome(income = {
  name: "",
  amount: 0,
  id: '0'
}) {
  incomeList.push(income);
  totalIncome += income.amount;
  budgetAvailable += income.amount;
}

export function addNewExpense(expense = {
  name: '',
  value: 0,
  id: '0'
}) {
  expensesList.push(expense);
  totalExpenses -= expense.value;
}

export function removeIncome(id = '0') {
  incomeList = incomeList.filter(elem => elem.id !== id);
  totalIncome = incomeList.reduce((prev, curr) => prev + curr, 0);
}

export function removeExpense(id = '0') {
  expensesList = expensesList.filter(elem => elem.id !== id)
  totalExpenses = expensesList.reduce((prev, curr) => prev + curr, 0);
}

window.incomeList = incomeList;
window.expensesList = expensesList;