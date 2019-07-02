'use strict';

var app = require('../server/server.js');

runTest()
  .then((res) => {
    console.log(res);
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

async function runTest(){
  const Book = app.models.book;
  let created_book = await Book.createExample();

  var args = {
    where: {
      title: {
        "$eq": created_book.title
      }
    }
  };
  let found_book = await Book.findOne(args);

  return found_book;
}
