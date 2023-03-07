//#1
function createProduct(partialProduct, callback) {
  const obj = {
    id: Date.now(),
    ...partialProduct,
  };
  callback(obj);
}

function logProduct(product) {
  if (!product.quontity) {
    return `Продукт ${product.name} закінчився на складі`;
  } else {
    return product;
  }
}

function logTotalPrice(product) {
  const result = product.price * product.quontity;
  return result;
}

createProduct(
  {
    name: "aplle",
    price: 40,
    quontity: 5,
  },
  logProduct
);

createProduct(
  {
    name: "lemon",
    price: 60,
    quontity: 3,
  },
  logTotalPrice
);

//#2
const TRANSACTION_LIMIT = 1000;

const account = {
  userName: "Tomm",
  balance: 400,
  withdraw(amout, onSuccess, onError) {
    if (amout > TRANSACTION_LIMIT) {
      onError("limit exceedet");
    } else if (amout > this.balance) {
      onError("littel money");
    } else {
      this.balance -= amout;
      onSuccess(`funds withdrawn ${amout}$, your balanse ${this.balance}$`);
    }
  },
  deposit(amout, onSuccess, onError) {
    if (amout <= 0) {
      onError("Error: the deposit amount must be greater than 0");
    } else if (amout > TRANSACTION_LIMIT) {
      onError(`Error : the amount should be less ${TRANSACTION_LIMIT}$`);
    } else {
      this.balance += amout;
      onSuccess(`the operation is successful you added ${amout}$`);
    }
  },
};

const handleSuccess = (massage) => {
  console.log(`✅success! ${massage}`);
};

const handleError = (massage) => {
  console.log(`❌Erorr ${massage}`);
};

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(900, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1600, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(500, handleSuccess, handleError);

//#2
const each = (array, calback) => {
  for (const item of array) {
    calback(item);
  }
};

const objValue = {
  valueMultiplication: [],
  valueSubtraction: [],
  valueSqrt: [],
  valueCeil: [],
  valueFloor: [],
};

each([64, 49, 36, 25, 16], (value) => {
  return objValue.valueMultiplication.push(value * 2);
});

each([64, 49, 36, 25, 16], (value) =>
  objValue.valueSubtraction.push(value - 2)
);

each([64, 49, 36, 25, 16], (value) =>
  objValue.valueSqrt.push(Math.sqrt(value))
);

each([64, 49, 36, 25, 16], (value) =>
  objValue.valueCeil.push(Math.ceil(value))
);

each([64, 49, 36, 25, 16], (value) =>
  objValue.valueFloor.push(Math.floor(value))
);

// console.log(objValue);

// const array = [1, 4, 6, 7, 9, 3, 76, 6];
// const arrayPlus = [];
// array.forEach((item) => arrayPlus.push(item + 1));

// console.log(arrayPlus);

const logItems = (items) => {
  items.forEach((element, index) => console.log(`${index + 1} - ${element}`));
};

// console.log(logItems(["❤", "🍞", "🥪", "🍤"]));
// console.log(logItems([1, 3, 45, 77, 4, 2]));
// console.log(logItems(["Tomm", "Asya", "Jack"]));

const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  const objUsersContacts = {};

  nameList.forEach((element, index) => {
    return (objUsersContacts[element] = Number(phoneList[index]));
  });
  return objUsersContacts;
};

// console.log(
//   printContactsInfo({
//     names: "Tomm,Oksana,Jack",
//     phones: "0932234881,0958032644,0976130109",
//   })
// );

const calculateAverage = (...args) => {
  let total = 0;
  args.forEach((el) => (total += el));
  return total / args.length;
};

// console.log(calculateAverage(1, 2, 3, 4)); //2.5
// console.log(calculateAverage(10, 23, 34, 45, 56, 78)); // 41

// function myFn() {
//   // проверим является ли arguments обычным массивом
//   console.log(Array.isArray(arguments)); // false
//   // количество аргументов
//   console.log(arguments.length); // 0
// }

// console.log(myFn()); // andefined

//test a...

// let a = 10;
// console.log(a);//10

// const foo = (b) => {
//   a = 5; // 5
//   return console.log(a + b);
// };
// console.log(a); //10
// foo(2);
// console.log(a); //5

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    const res = this.pizzas.includes(pizzaName);
    if (res) {
      return onSuccess(pizzaName);
    } else {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
