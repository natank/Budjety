import * as budjet from '../model/budjetModel.js';
import * as budjetUI from '../view/budjetUI.js';
import {
  domAddBtn,
  domAddType,
  domAddValue,
  domAddDescription
} from '../view/elements';



export function ctrlAddItem(event) {
  console.log('in ctrlAdd item')
  // 1. Determine event type
  let eventType = domAddType.value;

  // 2. Get the filled input data
  let value = domAddValue.value;
  let description = domAddDescription.value;


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
    budjet.addNewIncome(newItem);
    budjetUI.addNewIncome(newItem);
  } else if (eventType === 'exp') {
    budjet.addNewExpence(newItem);
    budjetUI.addNewExpence(newItem);
  }

  // 3. Add the item to the UI

  // 4. Calculate the budget

  // 5. Display the budget on the UI
  console.log("It workds")
}

document.addEventListener('readystatechange', (event) => {
  if (document.readyState === "complete") {
    domAddBtn.addEventListener('click', ctrlAddItem);
  }
});