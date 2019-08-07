import * as budget from '../model/budgetModel.js';
import * as budgetUI from '../view/budgetUI.js';

export function updateUIBudget() {
  let budgetAvailable = budget.getBudgetAvailable();

  let expenses = budget.getTotalExpenses();
  let income = budget.getTotalIncome();

  budgetUI.setAvailableBudget(budgetAvailable);
  budgetUI.setTotalExpenses(expenses);
  budgetUI.setTotalIncome(income);
}