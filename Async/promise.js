// const promise1 = new Promise((resolve, reject) => {
//   resolve("Promise 1 is resolved");
//   reject('Promise 1 is rejected');
// });

// console.log(promise1);

// promise1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

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

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    resolve(books);
    books.push(newBook);
  });
  return promise1;
};

addBook({
  author: "Douglas Adams",
  book: "The Hitchhiker's Guide to the Galaxy",
})
  .then((value) => {
    console.log("new list ");
    listBooks();
  })
  .catch((error) => {
    console.log(error);
  });
