const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Routes
var homeRouter = require('./routes/home');
app.use('/', homeRouter);

var addRouter = require('./routes/addBook');
app.use('/addBook', addRouter);

var editRouter = require('./routes/editBook');
app.use('/editBook', editRouter);

app.listen(3000, () => {
    console.log('Server running...');
});