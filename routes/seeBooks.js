var express = require('express');
var router = express.Router();
var Book = require('../models/book');

router.get('/', (req, res) => {
    try {
        if (isValid === true) {
            Book.find({owner: currUser})
             .then(result => {
                var books = [];
                for (let i = 0; i < result.length; i++) {
                    books.push(result[i]);
                }
                if (books.length === 0) {
                    res.redirect('/addBook');
                } else {
                    res.render('seeBooks', {books: books});
                }
             })
             .catch(err => console.log(err));
        } else {
            res.send('Access denied!');
        }
    }

    catch (err) {
        res.send('Access denied!');
        console.log(err);
    }
});

router.post('/', (req, res) => {
    Book.findOneAndDelete({ title: req.body.title })
     .then(result => res.redirect('/books'))
     .catch(err => console.log(err));
});

module.exports = router;