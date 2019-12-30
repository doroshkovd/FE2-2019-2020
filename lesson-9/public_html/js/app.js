function eventListeners() {
  const ui = new UI();

  ui.budgetForm.addEventListener('submit', (event) => {
    event.preventDefault();
    ui.submitBudgetForm();
  });

  ui.expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    ui.submitExpenseForm();
  });

  ui.expenseList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.parentElement.classList.contains('edit-icon')) {
      ui.editExpense(event.target.parentElement);
    } else if (event.target.parentElement.classList.contains('delete-icon')) {
      ui.deleteExpense(event.target.parentElement);
    }
  });

  ui.saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    ui.saveData();
  });

  ui.loadData();
}

document.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});
