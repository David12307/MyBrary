const express = require('express');
const router = express.Router();
const User = require('../models/user');
let epicNumber = 0;

router.get('/', (req, res) => {
    try {
        if (isValid === true) {
            res.redirect('/');
        } else {
            res.render('register');
        }
    }
    catch (err) {
        res.render('register');
    }
});

router.post('/', (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
        
    function checkNumber(n) {
        if (n === 2) {
            user.save()
             .then(result => res.redirect('/login'))
             .catch(err => console.log(err));
        } else {
            res.send('Username / Email already taken!');
        }
    }

    function checkUser() {
        User.find({ username: req.body.username })
         .then(result => {
             if (result.length === 0) {
                 epicNumber++;
             } else {
                 console.log('Username already taken.');
             }
         })
         .catch(err => console.log(err));

        User.find({ email: req.body.email })
         .then(result => {
             if (result.length === 0) {
                 epicNumber++;
                 checkNumber(epicNumber);
                 epicNumber = 0;
             } else {
                 console.log('Email already taken.');
                 checkNumber(epicNumber);
                 epicNumber = 0;
             }
         })
    }

    checkUser();
});

module.exports = router;
