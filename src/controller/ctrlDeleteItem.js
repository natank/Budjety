import {
  domAddBtn,
  domAddType,
  domAddValue,
  domAddDescription
} from '../view/elements';

import * as budjetCtrl from '../model/budjetModel.js';
import * as uiCtrl from '../view/budjetUI.js';


export function ctrlDeleteItem(event) {
  // 1 - Delegate event to the closest .item__delete element
  let domItemDelete = event.target.closest('.item__delete');

  if (domItemDelete) {
    // 2 - read the id of the item from the DOM data-id attribute
    let item = domItemDelete.closest('.item');
    let id = Number(item.id.split('-')[1]);
    // 3 - determine the type of the element - income/expence
    if (item.closest('.income')) {
      // remove the income from the budjet model
      budjetCtrl.removeIncome(id);
      // remove the income from the UI 
      uiCtrl.deleteIncome(id)
    } else if (item.closest('.expenses')) {
      // remove the expence from the budjet model
      budjetCtrl.removeExpence(id);
      // remove the expence from the UI 
      uiCtrl.deleteExpence(id);
    }
  }






}

function deleteIncome() {

}

function deleteExpense() {

}

// Add an '.income__list' click event handler
document.addEventListener('readystatechange', (event) => {
  if (document.readyState === "complete") {
    document.addEventListener('click', ctrlDeleteItem);
  }
});