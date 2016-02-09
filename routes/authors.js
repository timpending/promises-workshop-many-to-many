var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Authors() {
  return knex('authors');
}

router.get('/', function(req, res, next) {
  Authors().select().then(function (authors) {
    res.render('authors/index', {authors: authors});
  })
});

module.exports = router;
