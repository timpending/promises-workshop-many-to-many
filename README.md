## Overview

This exercise is designed to let you practice chaining Promises together to manage asynchronous database calls and pass information to the view.

All code in the views has been set up for you. __You only need to write code in each associated route.__

## Objectives

* Be able to chain promises 
* Be able to use `Promise.all`
* Be able to pass a higher order function to `Promise.all`
* Be able to extract complex database calls into functions  

## Authors

__#1 SHOW__

1. In `authors.js`, find the `GET` route for `/:id`
2. Implement `Promises` using the pseudo code as a guide

__#3 EDIT__

1. In `authors.js`, find the `GET` route for `/:id/edit`
2. Implement `Promises` using the pseudo code as a guide

__#3 ALL__

1. In `authors.js` find the GET route for `/`
2. Implement Promises using the pseudo code as a guide

#### REFACTOR AUTHOR ROUTES

1. Inside `lib/helpers.js` find the `getAuthorBooks` function.
2. Refactor your routes so that the heavy lifting is done in this function.
3. Inside your routes, call your helper function to get the job done.

## Books

__#1 SHOW__

1. In `books.js`, find the `GET` route for `/:id`
2. Implement `Promises` using the pseudo code as a guide

__#2 EDIT__

1. In `books.js`, find the `GET` route for `/:id/edit`
2. Implement `Promises` using the pseudo code as a guide

__#3 ALL__

1. In `books.js` find the GET route for `/`
2. Implement Promises using the pseudo code as a guide

#### REFACTOR BOOKS ROUTES

1. Inside `lib/helpers.js` find the `getBookAuthors` function.
2. Refactor your routes so that the heavy lifting is done in this function.
3. Inside your routes, call your helper function to get the job done.
