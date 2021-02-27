'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2021-02-17T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-02-22T23:36:17.929Z',
    '2021-02-26T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2021-02-27T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2021-02-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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


// calculate the formatted date based on current date
const calcFormattedDate = function(date, locale){
  const currentDate = new Date();
  const daysPassed = Math.round((currentDate - date)/(1000*60*60*24));    
  // subtraction is done between timestamp (miliseconds) of each date

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7 ) return `${daysPassed} days ago`;

  // if more than 7 days, return date in format dd/mm/yyyy
  return new Intl.DateTimeFormat(locale).format(date);
  // const day = `${date.getDate()}`.padStart(2, '0');
  // const month = `${date.getMonth() + 1}`.padStart(2, '0');   // months start from 0 in JS
  // const year = `${date.getFullYear()}`;
  // return `${day}/${month}/${year}`;
};

// calculate the formatted currency/number based on user's locale
const formatCur = function(value, locale, currency){
  return Intl.NumberFormat(locale, {style: 'currency', currency}).format(value);
}

// Add Movements to the list
const displayMovements = function(account, sort=false){
  // empty the container before adding movements
  containerMovements.innerHTML = '';

  const movements = account.movements;
  const movs = sort ? movements.slice().sort( (a, b) => a - b) : movements;

  movs.forEach(function(mov, i){
    // create strings of html code
    const movType = mov > 0 ? 'deposit' : 'withdrawal'

    // date
    const movDate = new Date(account.movementsDates[i]);
    const formattedDate = calcFormattedDate(movDate, account.locale);

    // formatted currency & movement
    const formattedMov = formatCur(mov, account.locale, account.currency);

    const movHtml = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movType}">${i+1} ${movType}</div>
      <div class="movements__date">${formattedDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movHtml);   // more alternatives available
  })
};

// sorting movements functionality
let sorted = false;
btnSort.addEventListener('click', function(event){
  event.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  console.log(sorted);
})

// Calculate and display balance
const calcPrintBalance = function(account){
  // add balance to the account
  account.balance = account.movements.reduce( (acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(account.balance, account.locale, account.currency);
};


// Generate Summary of account: IN, OUT & INTEREST
const calcDisplaySummary = function(account){
  // incoming
  const totalIncoming = account.movements
    .filter(mov => mov > 0)
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(totalIncoming, account.locale, account.currency);

  // outgoing
  const totalOutgoing = account.movements
    .filter(mov => mov < 0)
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(totalOutgoing, account.locale, account.currency);

  // interest: interest on each deposit and Interest amount should be atleast 1
  const interestRate = account.interestRate;
  const totalInterest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit*interestRate/100)
    .filter(interest => interest >= 1)
    .reduce( (acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = formatCur(totalInterest, account.locale, account.currency);

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
  displayMovements(acc);

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

    // display Current Date & Time under 'Current Balance' label
    const currentDate = new Date();
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    // const locale = navigator.language;    // to get the user's locale from the browser
    labelDate.textContent = Intl.DateTimeFormat(currentAccount.locale, options).format(currentDate);
    // const day = `${currentDate.getDate()}`.padStart(2, '0');
    // const month = `${currentDate.getMonth() + 1}`.padStart(2, '0');   // months start from 0 in JS
    // const year = `${currentDate.getFullYear()}`;
    // const hour = `${currentDate.getHours()}`.padStart(2, '0');
    // const minutes = `${currentDate.getMinutes()}`.padStart(2, '0');
    // labelDate.textContent = `${day}/${month}/${year},  ${hour}:${minutes}`;

    // set the 'sorted' variable to false
    sorted = false;
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
    // current date
    const currentDateTime = new Date().toISOString();

    // add negative movement & Date in current account
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(currentDateTime);

    // add positive movement & Date in recipient account
    recipientAcc.movements.push(amount);
    recipientAcc.movementsDates.push(currentDateTime);

    // update the UI (movements, balance & summary)
    updateUI(currentAccount);
  }
  else
    console.log('Transfer Invalid!');
});


// Request Loan functionality
btnLoan.addEventListener('click', function(event){
  event.preventDefault();

  // take the floor value of requested Amount (no need of conversion, because floor() do automatic type coercion)
  const requestedAmount = Math.floor(inputLoanAmount.value);
  // for granting loan, check if there is a deposit of atleast 10% of the requested amount
  if(requestedAmount > 0 && currentAccount.movements.some( mov => mov >= 0.1*requestedAmount)){
    // add loan to the movements
    currentAccount.movements.push(requestedAmount);
    // add date to the movementsDates
    currentAccount.movementsDates.push(new Date().toISOString());

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