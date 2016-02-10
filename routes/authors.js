var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Promise = require('bluebird');

function Authors() {
  return knex('authors');
}

function Books() {
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

router.get('/', function(req, res, next) {
  Authors().select().then(function (authors) {
    res.render('authors/index', {authors: authors});
  })
});
router.get('/new', function(req, res, next) {
  Books().select().then(function (books) {
    res.render('authors/new', {books: books});
  })
});

router.post('/', function (req, res, next) {
  var bookIds = req.body.book_ids.split(",");
  bookIds = prepIds(bookIds);
  delete req.body.book_ids;
  Authors().returning('id').insert(req.body).then(function (id) {
    Promise.all(bookIds.map(function (book_id) {
      book_id = Number(book_id)
      return Authors_Books().insert({
        book_id: book_id,
        author_id: id[0]
      })
    })).then(function () {
      res.redirect('/authors');
    })
  })
});

router.get('/:id/delete', function (req, res, next) {
  Promise.all([
    Authors().where('id', req.params.id).first(),
    Authors_Books().where('author_id', req.params.id)
  ]).then(function (results) {
    Promise.all(results[1].map(function (result) {
        return Books().where('id', result.book_id)
      })
    ).then(function (books) {
      res.render('authors/delete', {author: results[0], books: books[0]});
    })
  })
})

router.post('/:id/delete', function (req, res, next) {
  Promise.all([
    Authors().where('id', req.params.id).del(),
    Authors_Books().where('author_id', req.params.id)
  ]).then(function (results) {
    Promise.all(results[1].map(function (result) {
      return Books().where('id', result.book_id).del();
    }),
    Authors_Books().where('author_id', req.params.id).del()
  );
  }).then(function (results) {
      console.log("**********");
      console.log(results);
      res.redirect('/authors');
  })
})

module.exports = router;
