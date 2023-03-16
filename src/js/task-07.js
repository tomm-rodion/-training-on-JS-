const cars = [
  {
    id: 1,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const listRef = document.querySelector(".js-list");

// const marcup = cars
//   .map(
//     ({ car, type, price, img, id }) => `<li data-id = ${id}>
//       <img src="${img}" alt="${car}" width = '200px'>
//         <h2>Марка : ${car}</h2>
//         <h2> Модель : ${type}</h2>
//       <p>Ціна : ${price}</p>
//     </li>`
//   )
//   .join("");

const marcup = cars.reduce((acc, { car, type, price, img, id }) => {
  return (
    acc +
    `<li data-id = ${id}>
      <img src="${img}" alt="${car}" width = '200px'>
        <h2>Марка : ${car}</h2>
        <h2> Модель : ${type}</h2>
      <p>Ціна : ${price}</p>
    </li>`
  );
}, "");
listRef.insertAdjacentHTML("beforeend", marcup);
