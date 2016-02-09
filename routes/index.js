var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Books() {
  return knex('books');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  Books().select().then(function (books) {
    console.log("*****");
    console.log(books.length);
    res.render('index', {books: books});
  })
});

module.exports = router;
