//  Task 1 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
// const obj = {
//   weight: "88.3",
//   height: "1.75",
// };
// console.log(calcBMI(obj));
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );

//spam и sale
// function checkForSpam(message) {
//   let result;
//   result =
//     message.toLowerCase().includes("sale") ||
//     message.toLowerCase().includes("spam");
//   return result;
// }
// console.log(checkForSpam("Amazing SalE, only tonight!"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const resp = this.potions[i];
//       const { name } = resp;
//       if (name === oldName) {
//         resp.name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.addPotion({ name: "Stone", price: 520 });

// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion");

// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");

// console.log(atTheOldToad.potions);

// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    //a
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    //b
    make: "Honda",
    model: "accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

console.log(cars);
//#1
// const makeCarsWithDiscount = (cars, discount) => {
//   const newPrice = cars.map((car) => {
//     const resDiscount = (car.price / 100) * discount;
//     car.price -= resDiscount;
//     return car;
//   });
//   return newPrice;
// };
//#2 refactoring code
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {
//     Math.ceil(() => (car.price -= (car.price / 100) * discount));
//     return car;
//   });

// console.log(makeCarsWithDiscount(cars, 6));

//#1
// const filterByPrice = (cars, threshold) => {
//   const arrayFilterdCars = cars.filter((car) => car.price <= threshold);
//   return arrayFilterdCars;
// };
//#2 refactoring
// const filterByPrice = (cars, threshold) =>
//   cars.filter((car) => car.price <= threshold);

// const threshold = 25000;
// console.log(filterByPrice(cars, threshold));

// const getCarWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.log(getCarWithDiscount(cars));

// const getCarsWithType = (cars, type) =>
//   cars.filter(({ type: typeCar }) => typeCar === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));
// console.table(getCarsWithType(cars, "truck"));

// const getCarByModal = (cars, modal) =>
//   cars.find(
//     ({ model: modelCar }) => modelCar.toLowerCase() === modal.toLowerCase()
//   );

// console.log(getCarByModal(cars, "CR-V"));

// const sortByAscendingAmount = (cars) => {
//   return cars.sort((minAmount, maxAmout) => minAmount.amount - maxAmout.amount);
// };

// console.log(sortByAscendingAmount(cars));

// const sortByAscendingAmount = (cars) =>
//   cars.sort((minPrice, maxPrice) => minPrice.price - maxPrice.price);

// console.table(sortByAscendingAmount(cars));

// const sortByModel = (cars, order) => {
//   let result;
//   if (order === "asc") {
//     result = cars.sort((a, b) => a.model.localeCompare(b.model));
//   } else {
//   }
//   return result;
// };

// console.log(sortByModel(cars, "asc"));

// const getTotalPriceAllCars = (cars) =>
//   cars.reduce((acc, item) => {
//     return acc + item.amount;
//   }, 0);

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, item) => {
//     return acc + item.price;
//   }, 0);

// console.log(getTotalPriceAllCars(cars));
// console.log(getTotalAmount(cars));

// const getAvalebleCarNames = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.log(getAvalebleCarNames(cars));

const getSortedCarOnSale = (cars) => {
  let num = 0;
  return cars
    .filter(({ onSale }) => onSale)
    .sort((a, b) => a.price - b.price)
    .map((car) => {
      return `Car#${(num += 1)}
       Make: ${car.make},
       Model: ${car.model},
       Amount: ${car.amount},
       Price: ${car.price}`;
    });
};

console.table(getSortedCarOnSale(cars));
