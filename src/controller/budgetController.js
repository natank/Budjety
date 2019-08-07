import * as budgetCtrl from '../model/budgetModel.js';
import * as uiCtrl from '../view/budgetUI.js';

import * as ctrlAddItem from './ctrlAddItem';
import * as ctrlDeleteItem from './ctrlDeleteItem';
import {
  updateUIBudget
} from './updateUIBudget';

document.addEventListener('readystatechange', (event) => {
  if (document.readyState === "complete") {
    updateUIBudget();
  }
})