'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// Add Movements to the list
const displayMovements = function(movements){
  // empty the container before adding movements
  containerMovements.innerHTML = '';


  movements.forEach(function(mov, i){
    // create strings of html code
    const movType = mov > 0 ? 'deposit' : 'withdrawal'
    const movHtml = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movType}">${i+1} ${movType}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movHtml);   // more alternatives available
  })
};


// Calculate and display balance
const calcPrintBalance = function(account){
  // add balance to the account
  account.balance = account.movements.reduce( (acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€` ;
};


// Generate Summary of account: IN, OUT & INTEREST
const calcDisplaySummary = function(account){
  // incoming
  const totalIncoming = account.movements
    .filter(mov => mov > 0)
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${totalIncoming}€`;

  // outgoing
  const totalOutgoing = account.movements
    .filter(mov => mov < 0)
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(totalOutgoing)}€`;

  // interest: interest on each deposit and Interest amount should be atleast 1
  const interestRate = account.interestRate;
  const totalInterest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit*interestRate/100)
    .filter(interest => interest >= 1)
    .reduce( (acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${totalInterest.toFixed(2)}€`;

};


// Compute UserName for all users
const createUsernames = function(accounts){
  accounts.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map( word => word[0]).join('');
  });
}
createUsernames(accounts);


// UPDATE UI
const updateUI = function(acc){
  // Display Movements
  displayMovements(acc.movements);

  // Display Balance
  calcPrintBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
}


// Login functionality
let currentAccount;
btnLogin.addEventListener('click', function(event){
  /* IMPORTANT: As the button is inside a Form - 1) Automatic page refresh on submission    2) Enter key for submission */

  // remove automatic refresh
  event.preventDefault();
  
  // match Username and PIN
  currentAccount = accounts.find( acc => acc.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // clear input fields & remove focus from PIN input
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display Welcome Message & UI
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    updateUI(currentAccount);
  }
});



// TRANSFER FUNCTIONALITY
btnTransfer.addEventListener('click', function(event){
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recipientAcc = accounts.find( acc => acc.username === inputTransferTo.value);
  console.log('Recipient:', recipientAcc);

  // clear input fields
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  /* Check validity of transfer:
  a) Amount should be greater than zero
  b) Recipient account should exist
  c) Current account's balance should be greater than transfer amount
  d) Self transfer should not be allowed */
  
  if(amount > 0 && recipientAcc && currentAccount.balance >= amount && recipientAcc.username !== currentAccount.username){
    console.log('Transfer Valid');
    // add negative movement in current account
    currentAccount.movements.push(-amount);

    // add positive movement in recipient account
    recipientAcc.movements.push(amount);

    // update the UI (movements, balance & summary)
    updateUI(currentAccount);
  }
  else
    console.log('Transfer Invalid!');
});


// Request Loan functionality
btnLoan.addEventListener('click', function(event){
  event.preventDefault();

  const requestedAmount = Number(inputLoanAmount.value);
  // for granting loan, check if there is a deposit of atleast 10% of the requested amount
  if(requestedAmount > 0 && currentAccount.movements.some( mov => mov >= 0.1*requestedAmount)){
    // add loan to the movements
    currentAccount.movements.push(requestedAmount);

    // update UI - movements, balance & summary
    updateUI(currentAccount);
  }
  else
    console.log('Loan can\'t be granted!!');

  // empty loan input field
  inputLoanAmount.value = '';

});


// Deleting Account Functionality
btnClose.addEventListener('click', function(event){
  event.preventDefault();
  
  /* check:
  1) If the entered username is same as the current account's username
  2) Pin */
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    // Find the currentAccount's index in accounts array and delete it
    const index = accounts.findIndex(acc => acc.username === inputCloseUsername.value);
    accounts.splice(index, 1);

    // clear the input fields so that it is empty for other account login
    inputCloseUsername.value = inputClosePin.value = '';

    // Hide the UI
    containerApp.style.opacity = 0;
  }
  else
    console.log('Username or PIN is Incorrect!');
});