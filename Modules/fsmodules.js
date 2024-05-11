const fs = require("fs");

// Readding to a file

fs.readFile("password.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("File read successfully");
});

// Writing to a file
fs.writeFile("example.txt", "password123", (err) => {
  if (err) console.log(err);
  console.log("File written successfully");
});

// Appending to a file
fs.appendFile("example.txt", "example new 1234", (err) => {
  if (err) console.log(err);
  console.log("File appended successfully");
});

// Deleting a file
fs.unlink("example.txt", (err) => {
  if (err) console.log(err);
  console.log("File deleted successfully");
});

// Creating a directory
fs.mkdir("tutorial", (err) => {
  if (err) console.log(err);
  console.log("Directory created successfully");
});

//Nested directories
fs.mkdir("tutorials/test", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Directory created successfully");
});
