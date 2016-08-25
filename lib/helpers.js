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
  var obj = {}
  return Authors().where('id', author).first().then(function(author){
    return Authors_Books().pluck('book_id').where('author_id', author.id).then(function(bookIdsArray){
      return Books().whereIn('id', bookIdsArray).then(function(books){
        obj.author= author;
        obj.books = books;
        return obj
      })
    })
  })
}

function getAuthorBooks(author) {
  var obj = {}
  return Authors().where('id', author).first().then(function(author){
    return Authors_Books().pluck('book_id').where('author_id', author.id).then(function(bookIdsArray){
      return Books().whereIn('id', bookIdsArray).then(function(books){
        obj.author= author;
        obj.books = books;
        return obj
      })
    })
  })
}

function getBookAuthors(book) {
  // your code here
}


module.exports = {
  getAuthorBooks: getAuthorBooks,
  getBookAuthors: getBookAuthors
}
