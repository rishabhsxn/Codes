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
}

displayMovements(account1.movements);


// Calculate and display balance
const calcPrintBalance = function(movements){
  const balance = movements.reduce( (acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€` ;
}
calcPrintBalance(account1.movements);


// Generate Summary of account: IN, OUT & INTEREST
const calcDisplaySummary = function(movements){
  // incoming
  const totalIncoming = movements
    .filter(mov => mov > 0)
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${totalIncoming}€`;

  // outgoing
  const totalOutgoing = movements
    .filter(mov => mov < 0)
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(totalOutgoing)}€`;

  // interest: 1.2% interest on each deposit and Interest amount should be atleast 1
  const interestRate = 1.2;
  const totalInterest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit*interestRate/100)
    .filter(interest => interest >= 1)
    .reduce( (acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${totalInterest}€`;

};
calcDisplaySummary(account1.movements);


// Compute UserName for all users
const createUsernames = function(accounts){
  accounts.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map( word => word[0]).join('');
  });
}
createUsernames(accounts);