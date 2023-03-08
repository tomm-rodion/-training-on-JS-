const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
    age: 10,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
    age: 15,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
    age: 120,
  },
];

const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter((genres, index) => {
  if (allGenres.indexOf(genres) === index) {
    return genres;
  }
});
// console.log(allGenres);
// console.log(uniqueGenres);

const getUsersWithAge = (users, minAge, maxAge) => {
  const res = users.filter((user) => {
    if (user.age > minAge && user.age < maxAge) {
      return user;
    }
  });
  return res;
};

// console.log(getUsersWithAge(books, 13, 34));

const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => {
      if (array.indexOf(friend) === index) {
        return friend;
      }
    });
};

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((acc, item) => {
  return acc + item.playtime / item.gamesPlayed;
}, 0);

// console.log(totalAveragePlaytimePerGame);

//#2
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

//#1
const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => {
    return acc + user.balance;
  }, 0);
};

//#2

const calculateTotalBalanceTwo = (users) => {
  let totalBalance = 0;
  users.map(({ balance }) => {
    totalBalance += balance;
  });
  return totalBalance;
};

// console.log(calculateTotalBalanceTwo(users));

const getTotalFriendCount = (users) => {
  const totalFriends = users.reduce((acc, user) => {
    acc.push(...user.friends);
    return acc;
  }, []);
  return totalFriends.length;
};

// console.log(getTotalFriendCount(users));

const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};

// console.log(sortByAscendingBalance(users));

//#4

const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => {
    if (book.rating > MIN_BOOK_RATING) {
      return book;
    }
  })
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

// console.log(names);
//#5
const getSortedFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => {
      if (array.indexOf(friend) === index) {
        return friend;
      }
    })
    .sort((a, b) => a.localeCompare(b));
};

//#6
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => {
      if (user.gender === gender) {
        return user;
      }
    })
    .reduce((acc, user) => {
      return acc + user.balance;
    }, 0);
};
