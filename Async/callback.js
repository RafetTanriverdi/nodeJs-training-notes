// const func1 = () => {
//   console.log("function 1 completed");
// };
// const func2 = () => {
//   console.log("function 2 completed");
// };

// func2();
// func1();

const books = [
  {
    author: "J.K. Rowling",
    book: "Harry Potter and the Sorcerer's Stone",
  },

  {
    author: "J.K. Rowling",
    book: "Harry Potter and the Chamber of Secrets",
  },
  {
    author: "J.K.Tolkien",
    book: "The Lord of the Rings",
  },
  {
    author: "J.K.Tolkien",
    book: "The Hobbit",
  },
  {
    author: "Arthur C. Clarke",
    book: "2001: A Space Odyssey",
  },
  {
    author: "Carl Sagan",
    book: "Cosmos",
  },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.book + " by " + book.author);
  });
};

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addBook(
  { author: "Douglas Adams", book: "The Hitchhiker's Guide to the Galaxy" },
  listBooks
);
