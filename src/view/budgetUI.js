import {
  domIncomeList,
  domExpensesList,
  domAvailableBudget,
  domBudgetIncome,
  domBudgetExpenses
} from './elements';

export function addNewIncome(income = {
  name: "",
  amount: 0,
  id: 0
}) {
  // 1 - Create new elemnt with the properties specified
  let markup = getIncomeMarkup(income.name, income.amount, income.id);
  // 2 - Add the element from the dom
  domIncomeList.insertAdjacentHTML('beforeEnd', markup);
}

export function addNewExpense(expense = {
  name: "",
  amount: 0,
  id: 0
}) {
  // 1 - Create new elemnt with the properties specified
  let markup = getExpenseMarkup(expense.name, expense.amount, expense.percentage, expense.id);
  // 2 - Add the element from the dom
  domExpensesList.insertAdjacentHTML('beforeEnd', markup);
}

export function deleteIncome(id = 0) {
  // 1 - find the element by data-id field
  let elemToDelete = document.getElementById(`income-${id}`)
  // 2 - remove the element from the dom
  elemToDelete.remove();
}

export function deleteExpense(id = 0) {
  // 1 - find the element by data-id field
  let elemToDelete = document.getElementById(`expense-${id}`)
  // 2 - remove the element from the dom
  elemToDelete.remove();
}


export function setTotalIncome(value = 0) {
  if (value === 0) domBudgetIncome.innerText = '0'
  else if (value > 0) domBudgetIncome.innerText = `+ ${value}`
  else if (value < 0) domBudgetIncome.innerText = `- ${value}`
}

export function setTotalExpenses(value = 0) {
  if (value === 0) domBudgetExpenses.innerText = '0'
  else if (value > 0) domBudgetExpenses.innerText = `+ ${value}`
  else if (value < 0) domBudgetExpenses.innerText = `- ${value}`
}

export function setAvailableBudget(value = 0) {
  if (value === 0) domAvailableBudget.innerText = '0'
  else if (value > 0) domAvailableBudget.innerText = `+ ${value}`
  else if (value < 0) domAvailableBudget.innerText = `- ${value}`
}
//income.name, income.amount, income.id)
function getIncomeMarkup(name, amount, id) {
  let markup = `
                <div class="item clearfix" id="income-${id}">
                    <div class="item__description">${name}</div>
                    <div class="right clearfix">
                        <div class="item__value">+ ${amount}</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
                </div>
                `

  return markup;
}

function getExpenseMarkup(name, amount, percentage = 0, id) {
  let markup = `<div class="item clearfix" id="expense-${id}">
                  <div class="item__description">${name}</div>
                  <div class="right clearfix">
                      <div class="item__value">- ${amount}</div>
                      <div class="item__percentage">${percentage}%</div>
                      <div class="item__delete">
                          <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                      </div>
                  </div>
                </div>`;
  return markup
}