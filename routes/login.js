const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    try {
        if (isValid === true) {
            res.redirect('/');
        } else {
            res.render('login');
        }
    }
    catch(err) {
        res.render('login');
    }
});

router.post('/', (req, res) => {
    User.find( { username: req.body.username, password: req.body.password } )
     .then(result => {
        if (result.length === 1) {
            isValid = true;
            currUser = req.body.username;
            res.redirect('/');
        } else {
            res.render('login');
        }
     })
     .catch(err => console.log(err));
});

module.exports = router;