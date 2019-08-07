import * as budget from '../model/budgetModel.js';
import * as budgetUI from '../view/budgetUI.js';
import {
  domAddBtn,
  domAddType,
  domAddValue,
  domAddDescription
} from '../view/elements';
import {
  updateUIBudget
} from './updateUIBudget';


export function ctrlAddItem() {

  // 1. Determine event type
  let eventType = domAddType.value;

  // 2. Get the filled input data
  let value = domAddValue.value;
  let description = domAddDescription.value;

  if (value && description) {

    // 3. build the new item
    let max = 100000;
    let id = Math.floor(Math.random() * Math.floor(max));

    let newItem = {
      name: description,
      amount: Number(value),
      id: id
    }
    // 4. Add the item to the budget model and view
    if (eventType === 'inc') {
      budget.addNewIncome(newItem);
      budgetUI.addNewIncome(newItem);
    } else if (eventType === 'exp') {
      budget.addNewExpense(newItem);
      budgetUI.addNewExpense(newItem);
    }

    // 5. reset the UI inputs
    domAddValue.value = '';
    domAddDescription.value = '';

    // 6. update the UI fields
    updateUIBudget();

  }
}



document.addEventListener('readystatechange', (event) => {
  if (document.readyState === "complete") {
    domAddBtn.addEventListener('click', ctrlAddItem);
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) ctrlAddItem()
    })
  }
});