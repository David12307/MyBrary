var express = require('express');
var router = express.Router();
var Book = require('../models/book');

router.get('/', (req, res) => {
    try {
        if (isValid === true) {
            res.render('addBook');
        } else {
            res.send('Access denied!');
        }
    }
    catch (err) {
        res.send('Access denied!');
    }
});

router.post('/', (req, res) => {
    const book = new Book({
        owner: currUser,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        cover: req.body.cover
    });

    book.save()
     .then(result => {
        res.redirect('/books');
     })
     .catch(err => console.log(err));
});

module.exports = router;