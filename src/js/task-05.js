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
