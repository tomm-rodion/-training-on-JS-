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

console.log(objValue);

// const array = [1, 4, 6, 7, 9, 3, 76, 6];
// const arrayPlus = [];
// array.forEach((item) => arrayPlus.push(item + 1));

// console.log(arrayPlus);
