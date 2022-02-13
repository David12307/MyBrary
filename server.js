const express = require('express');
const app = express();
const mongoose = require('mongoose');
let isValid = false;
let currUser;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Connect database
const dbURI = "mongodb+srv://davidd:okiokioki123@cluster0.psmuv.mongodb.net/Eighty?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then(result => {
     app.listen(3000);
     console.log('Server online and ready!');
 })
 .catch(err => console.log(err));

// Routes

var registerRouter = require('./routes/register');
app.use('/register', registerRouter);

var loginRouter = require('./routes/login');
app.use('/login', loginRouter);

var homeRouter = require('./routes/home');
app.use('/', homeRouter);

var addRouter = require('./routes/addBook');
app.use('/addBook', addRouter);

var renderRouter = require('./routes/seeBooks');
app.use('/books', renderRouter);

var editRouter = require('./routes/editBook');
app.use('/edit', editRouter);