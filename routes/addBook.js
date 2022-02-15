const express = require('express');
const router = express.Router();
var books = require('../routes/books');

router.get('/', (req, res) => {
    res.render('addBook');
});

router.post('/', (req, res) => {
    var book = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        cover: req.body.cover
    };

    for (i = 0; i < books.length; i++) {
        if (books[i].title == book.title) {
            books.splice(i, 1);
        }
    }

    books.push(book);
    console.log(book);
    res.redirect('/');
});

module.exports = router;