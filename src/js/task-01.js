const bookShelf = {
  books: ["Tomm", "Sandra", "Leo"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const indexBook = this.books.indexOf(bookName);
    if (indexBook === -1) {
      return console.log("No such book was found! 🙄");
    } else {
      this.books.splice(indexBook, 1);
    }
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook("The Mist");
bookShelf.removeBook("The Mists");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

bookShelf.addBook("Tomm");

console.log(bookShelf.getBooks());
