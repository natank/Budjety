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
  // 2. Add the item to the budget model
  if (eventType === 'inc') {
    let max = 100000;
    let id = Math.floor(Math.random() * Math.floor(max));
    let newIncome = {
      name: description,
      value: Number(value),
      id: id
    }
    budjet.addNewIncome(newIncome);
    budjetUI.addNewIncome(newIncome);
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