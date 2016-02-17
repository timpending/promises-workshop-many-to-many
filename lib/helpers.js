var Promise = require('bluebird');
var knex = require('../db/knex');

function Authors() {
  return knex('authors');
}

function Books(){
  return knex('books');
}

function Authors_Books() {
  return knex('authors_books');
}

function prepIds(ids) {
  return ids.filter(function (id) {
    return id !== '';
  })
}

function flattenArray(array) {
  return array.reduce(function (a, b) {
    return a.concat(b)
  }, []);
}

function insertIntoAuthorsBooks(bookIds, authorId) {
  bookIds = prepIds(bookIds);
  return Promise.all(bookIds.map(function (book_id) {
    book_id = Number(book_id)
    return Authors_Books().insert({
      book_id: book_id,
      author_id: authorId
    })
  }))
}

function getAuthorBooks(author) {
  // get all associated records from Authors_Books
  // using Promise.all map over the array of records
  // return a single array of author books
}

function getBookAuthors(book) {
  // get all associated records from Authors_Books
  // using Promise.all map over the array of records
  // return a single array of book authors
}


module.exports = {
  prepIds: prepIds,
  flattenArray: flattenArray,
  insertIntoAuthorsBooks: insertIntoAuthorsBooks,
  getAuthorBooks: getAuthorBooks,
  getBookAuthors: getBookAuthors
}
