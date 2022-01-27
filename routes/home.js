var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    try {
        if (isValid === true) {
            res.render('index', {username: currUser});
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
    isValid = false;
    currUser = '';
    res.redirect('/login');
})

module.exports = router;