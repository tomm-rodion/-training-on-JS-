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

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    return this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const resp = this.potions[i];
      const { name } = resp;
      if (name === oldName) {
        resp.name = newName;
      }
    }
  },
};

atTheOldToad.addPotion({ name: "Stone", price: 520 });

console.log(atTheOldToad.potions);
atTheOldToad.removePotion("Speed potion");

atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");

console.log(atTheOldToad.potions);
