'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, -840],
  interestRate: 1.2, // %
  pin: 1111,
  balance: 0,
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, -840];

//!
//containerMovements.innerHTML = '';
const displayMovements = function (movements) {
  //co;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    if (type == 'deposit') {
      account1.balance += mov;
    } else {
      account1.balance = account1.balance - Math.abs(mov);
    }

    containerMovements.insertAdjacentHTML('afterbegin', html);
    document.querySelector(
      '.balance__value'
    ).textContent = `${account1.balance}€`;
  });
};

const addMovement = function (account, movement, i) {
  const type = movement > 0 ? 'deposit' : 'withdrawal';
  const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
    i + 1
  } ${type}</div>
      <div class="movements__value">${movement}</div>
    </div>
    `;
  if (type == 'deposit') {
    account.balance += movement;
  } else {
    account.balance = account.balance - Math.abs(movement);
  }
  containerMovements.insertAdjacentHTML('afterbegin', html);
  document.querySelector('.balance__value').textContent = `${account.balance}€`;
};
//displayMovements(account1.movements);
//console.log(containerMovements.innerHTML);
//! the map method
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const movArray = array.map(function (element) {
  return element * 2;
});
//console.log(movArray);

const movArray2 = array.map(mov => mov * 3);
//console.log(movArray2);

//! CREATING USERNAME ::::::::: ///////// :::::::::::::
// const user = 'Souptik Karan';
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(username);
// const createUsername = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return username;
// };
// const user = 'soutpik karan';
// const username = createUsername(user);

// console.log(username);

const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
};
const user = 'Nabin Ch Karan';
const username = createUsername(user);
//console.log(username);
//const username =;

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // acc.username = createUsername(acc.owner);
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

// accounts.forEach(function (acount) {
//   console.log(
//     acount.owner
//       .toLowerCase()
//       .split(' ')
//       .map(function (name) {
//         return name[0];
//       })
//       .join('')
//   );
// });

//! FILTER METHOD:::::::::::://////////////:::::::::::::::

// const deposites = movements.filter(function (mov) {
//   return mov > 0;
// });

// const depositeByForOfloop = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositeByForOfloop.push(mov);
//   }
// }
// console.log(depositeByForOfloop);
// console.log(deposites);

// const withdrawalbyForLoop = [];
// const withdrawal = movements.filter(mov => mov < 0);
// for (const values of movements) {
//   if (values < 0) {
//     let absValues = Math.abs(values);
//     withdrawalbyForLoop.push(absValues);
//   }
// }
// console.log(withdrawalbyForLoop);
// const sum = 0;
// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// array1.forEach(function (item) {
//   sum = sum + item;
// });
//console.log(sum);

//! REDUCE METHOD //////////::::::::::////////////________-------______--___-___--____-

// console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 1000);

// console.log(balance);

// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce(function (acc, mov, i, arr) {
//     console.log(`${i} number iteration and iteration amount ${acc}`);
//     return acc + mov;
//   }, 0);
//   labelBalance.textContent = balance;
//   //console.log(`iteration ${acc}`);
//   return balance;
// };
// console.log(calcDisplayBalance(account1.movements));
// //labelBalance.textContent = calcDisplayBalance(account2.movements;

// //* find the maximum number from a array uging the reduce method:::::://////////:::::::

// console.log(movements);
// const calMaxNum = function (movements) {
//   const max = movements.reduce(function (acc, mov) {
//     if (acc > mov) {
//       return acc;
//     } else {
//       return mov;
//     }
//   }, movements[0]);
//   return max;
// };

// console.log(calMaxNum(movements));

//! CHAINING METHOD TO USE ALL IN ONE GO ///////::::::::///////

// console.log(movements);
// console.log('converting the euro in dollar');
// const convertUSD = 1.1;
// const dollarEq = function (movements) {
//   const dollar = movements
//     .filter(mov => mov > 0)
//     .map(mov => mov * convertUSD)
//     .reduce((acc, mov) => acc + mov, 0);
//   return dollar;
// };

// console.log(dollarEq(movements));

// //*counting the deposite or in/////::::::::://///////
// console.log(movements);
// const IN = function (movements) {
//   const totalIN = movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   return totalIN;
// };
// console.log(IN(account1.movements));
// labelSumIn.textContent = IN(account1.movements);

// //*counting the withdrawl or out   /////::::::::://///////

// const OUT = function (movements) {
//   const totalOut = Math.abs(
//     movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
//   );
//   return totalOut;
// };
// labelSumOut.textContent = OUT(account1.movements);
// console.log(OUT(account1.movements));

// console.log(Math.abs(movements.find(mov => mov < 0)));

// console.log(accounts);

// const account = account1;
// console.log(account.owner);

// const demoAccount = function (acounts) {
//   const user = accounts.owner;
//   const createUsername = function (user) {
//     const username = user
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//     console.log(username);
//     return username;
//   };
// };
// demoAccount(account1);

// const accountDemo = accounts.find(function (account) {
//   return account.owner === 'Jessica Davis';
// });

// const accountDemo = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(accountDemo);
// console.log('finding the object by name: ');

// const findingObj = function (name) {
//   return accounts.find(acc => acc.owner === `${name}`);
// };
// const accountDemo = findingObj('Steven Thomas Williams');
// console.log(accountDemo);

//! IMPLEMENTING THE LOGIN FUNCTION /////////::::::::://///////::::::::////////:::::::>>>

// let DemoAccount;
// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   // console.log(inputLoginUsername.);
//   const givenUserName = inputLoginUsername.value;
//   const givenPin = inputLoginPin.value;
//   console.log(givenUserName);
//   console.log(givenPin);

//   //finding the obj with the user name ;

//   DemoAccount = accounts.find(acc => acc.owner === `${givenUserName}`);
//   if (DemoAccount.pin === `${givenPin}`) {
//     console.log('login successful');
//   }
// });
//console.log(account1.username);
//
//console.log(giverUserName);
//const givenPIN =
// let currentAccount;
// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log('login successful');
//   console.log(currentAccount);
// });
// //console.log(account1.pin);

// let currentAccount;
// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );

//   //console.log(currentAccount.pin);
//   if (currentAccount.pin === Number(inputLoginPin.value)) {
//     console.log('login successful');
//     console.log(currentAccount);
//   } else {
//     console.log('check the user name and password again');
//   }
//   //console.log(Number(inputLoginPin.value));
// });

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // if (currentAccount && currentAccount === 'undefiend') {
  //   console.log('wrong username');
  // }
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    console.log('login successful:');
    console.log(currentAccount);
    containerApp.style.opacity = 1;
    displayMovements(currentAccount.movements);
  } else {
    alert('wrong credentials:');
    console.log('check the credentials again');
    containerApp.style.opacity = 0;
  }

  loanBtn.addEventListener('click', function (e) {
    e.preventDefault();
    //console.log(currentAccount);
    currentAccount.movements.push(Number(inputLoanAmount.value));
    console.log(currentAccount.movements);
    addMovement(currentAccount, Number(inputLoanAmount.value));
  });

  //? ::::::clocing account ::::::

  btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    //console.log(currentAccount);
    if (
      currentAccount.username === `${inputCloseUsername.value}` &&
      currentAccount.pin === Number(inputClosePin.value)
    ) {
      console.log(`closing account of ${currentAccount.username}`);
      containerApp.style.opacity = 0;
      //e.defaultPrevented();
    }
  });
});

const logoBtn = document.querySelector('.logo');
const loanBtn = document.querySelector('.form__btn--loan');
logoBtn.addEventListener('click', async function () {
  // if (containerApp.style.opacity == 0.5) {
  //   containerApp.style.opacity = 1;
  // } else
  // if (containerApp.style.opacity == 1) {
  //   containerApp.style.opacity = 0.5;
  // }
  containerApp.style.opacity = 0.05;
  await sleep(200);
  containerApp.style.opacity = 1;
  console.log('refreshing');
});

//! CLOSING ACCOUNT SECTION //////::::::://////::::::
