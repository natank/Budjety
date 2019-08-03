var incomeList = [];
var expencesList = [];
var totalIncome = 0;
var totalExpences = 0;
var budjetAvailable = 0;

export function getBudjetAvailable() {
  return totalIncome = totalExpences;
}

export function getIncomeList() {
  return incomeList.reduce((prev, curr) => {
    curr + elem
  }, 0);
}

export function getExpensesList() {
  return expencesList.reduce((prev, curr) => {
    curr + elem
  }, 0);
}

export function addNewIncome(income = {
  name: "",
  amount: 0,
  id: '0'
}) {
  incomeList.push(income);
  totalIncome += income.amount;
  budjetAvailable += income.amount;
}

export function addNewExpence(expence = {
  name: '',
  value: 0,
  id: '0'
}) {
  expencesList.push(expence);
  totalExpences -= expence.value;
  budjetAvailable -= expence.value;
}

export function removeIncome(id = '0') {
  incomeList = incomeList.filter(elem => elem.id === id);
  totalIncome = incomeList.reduce((prev, curr) => prev + curr, 0);
}

export function removeExpence(id = '0') {
  expencesList = expencesList.filter(elem => elem.id === id)
  totalExpences = expencesList.reduce((prev, curr) => prev + curr, 0);
}