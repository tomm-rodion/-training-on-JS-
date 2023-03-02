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

function handleSuccess(massage) {
  console.log(`✅success! ${massage}`);
}

function handleError(massage) {
  console.log(`❌Erorr ${massage}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(900, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);

account.deposit(1600, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(500, handleSuccess, handleError);
