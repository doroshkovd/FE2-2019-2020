function UI() {
  this.budgetFeedback = document.querySelector('.budget-feedback');
  this.expenseFeedback = document.querySelector('.expense-feedback');
  this.budgetForm = document.querySelector('#budget-form');
  this.budgetInput = document.querySelector('#budget-input');
  this.budgetAmount = document.querySelector('#budget-amount');
  this.expenseForm = document.querySelector('#expense-form');
  this.expenseAmount = document.querySelector('#expense-amount');
  this.amountInput = document.querySelector('#amount-input');
  this.expenseInput = document.querySelector('#expense-input');
  this.expenseList = document.querySelector('#expense-list');
  this.saveBtn = document.getElementById('save-button');
  this.balance = document.getElementById('balance');
  this.balanceAmount = document.getElementById('balance-amount');
  this.itemID = 0;
  this.itemList = [];
}

UI.prototype.submitBudgetForm = function () {
  const val = this.budgetInput.value;
  const currentValue = parseInt(this.budgetAmount.textContent, 10);

  if (val === '' || val < 0) {
    this.showError('budgetFeedback', null);
    return false;
  }

  this.budgetAmount.textContent = +val + +currentValue;
  this.budgetInput.value = '';
  this.showBalance();
};

UI.prototype.submitExpenseForm = function () {
  const expenseValue = this.expenseInput.value;
  const amountValue = this.amountInput.value;

  if (expenseValue === '' || amountValue === '' || amountValue < 0) {
    this.showError('expenseFeedback');
    return false;
  }
  const amount = parseInt(amountValue, 10);

  const expense = {
    id: this.itemID,
    title: expenseValue,
    amount,
  };

  this.expenseInput.value = '';
  this.amountInput.value = '';

  this.itemID += 1;
  this.itemList.push(expense);

  this.addExpense(expense);
  this.showBalance();
};

UI.prototype.addExpense = function (expense) {
  const div = document.createElement('div');
  div.classList.add('expense');
  div.innerHTML = `
             <div class="expense-item d-flex justify-content-between align-items-baseline">

              <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
              <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

              <div class="expense-icons list-item">

               <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
                <i class="fas fa-edit"></i>
               </a>
               <a href="#" class="delete-icon" data-id="${expense.id}">
                <i class="fas fa-trash"></i>
               </a>
              </div>
             </div>`;
  this.expenseList.append(div);
};

UI.prototype.showError = function (form, msg, timer = 3000) {
  // eslint-disable-next-line no-param-reassign
  msg = msg || '<p>Value should be more then 0 and not empty</p>';

  this[form].classList.add('showItem');
  this[form].innerHTML = msg;

  setTimeout(() => {
    this[form].classList.remove('showItem');
  }, timer);
};

UI.prototype.showBalance = function () {
  // ToDo: count proper expense;
  const expense = this.totalExpense();
  const total = parseInt(this.budgetAmount.textContent, 10) - expense;

  this.balanceAmount.textContent = total;

  if (total < 0) {
    this.balance.classList.remove('showGreen');
    this.balance.classList.add('showRed');
  } else {
    this.balance.classList.remove('showRed');
    this.balance.classList.add('showGreen');
  }
};

UI.prototype.totalExpense = function () {
  let total = 0;
  if (this.itemList.length > 0) {
    total = this.itemList.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
  }
  this.expenseAmount.innerHTML = total;
  return total;
};

UI.prototype.editExpense = function (element) {
  const id = parseInt(element.dataset.id, 10);
  const expense = this.itemList.filter((item) => {
    return item.id === id;
  })[0];

  this.expenseInput.value = expense.title;
  this.amountInput.value = expense.amount;
  this.deleteExpense(element);
};

UI.prototype.deleteExpense = function (element) {
  const id = parseInt(element.dataset.id, 10);
  let parent = element.parentElement.parentElement.parentElement;
  console.log(parent);

  this.expenseList.removeChild(parent);
  this.itemList = this.itemList.filter((item) => {
    return item.id !== id;
  });
  this.showBalance();
};

UI.prototype.saveData = function () {
  const data = {
    budgetAmount: this.budgetAmount.textContent,
    itemList: this.itemList,
    itemID: this.itemID,
  };

  localStorage.setItem('state', JSON.stringify(data));
};

UI.prototype.loadData = function () {
  if (!localStorage.getItem('state')) {
    return false;
  }

  const data = JSON.parse(localStorage.getItem('state'));
  this.itemID = data.itemID;
  this.budgetAmount.textContent = data.budgetAmount;
  this.itemList = data.itemList;
  this.itemList.forEach((item) => {
    this.addExpense(item);
  });
  this.showBalance();
};
