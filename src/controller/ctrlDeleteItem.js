import {
  domContainer

} from '../view/elements';

import * as budgetCtrl from '../model/budgetModel.js';
import * as uiCtrl from '../view/budgetUI.js';
import {
  updateUIBudget
} from './updateUIBudget';

export function ctrlDeleteItem(event) {
  // 1 - Delegate event to the closest .item__delete element
  let domItemDelete = event.target.closest('.item__delete');

  if (domItemDelete) {
    // 2 - read the id of the item from the DOM data-id attribute
    let item = domItemDelete.closest('.item');
    let id = Number(item.id.split('-')[1]);
    // 3 - determine the type of the element - income/expense
    if (item.closest('.income')) {
      // remove the income from the budget model
      budgetCtrl.removeIncome(id);
      // remove the income from the UI 
      uiCtrl.deleteIncome(id)
    } else if (item.closest('.expenses')) {
      // remove the expense from the budget model
      budgetCtrl.removeExpense(id);
      // remove the expense from the UI 
      uiCtrl.deleteExpense(id);
    }
    updateUIBudget();
  }






}

function deleteIncome() {

}

function deleteExpense() {

}

// Add an '.income__list' click event handler
document.addEventListener('readystatechange', (event) => {
  if (document.readyState === "complete") {
    domContainer.addEventListener('click', ctrlDeleteItem);
  }
});