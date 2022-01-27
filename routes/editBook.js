const express = require('express');
const router = express.Router();
var Book = require('../models/book');

router.get('/:title', (req, res) => {
    try {
        if (isValid === true) {
            Book.find({title: req.params.title, owner: currUser})
             .then(result => {
                 if (result.length === 1) {
                    res.render('editBook', {book: req.params.title});
                 } else {
                    res.redirect('/');
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

router.post('/:title', (req, res) => {
    Book.findOneAndUpdate({ title: req.body.title, owner: currUser }, {description: req.body.description, author: req.body.author})
     .then(result => res.redirect('/books'))
     .catch(err => console.log(err));
});

module.exports = router;