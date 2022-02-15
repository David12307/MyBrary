const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

<<<<<<< HEAD
=======
// Connect database
const dbURI = "";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then(result => {
     app.listen(3000);
     console.log('Server online and ready!');
 })
 .catch(err => console.log(err));

>>>>>>> 1b019d16935c7a22bb71d7aca1434559858fdd92
// Routes
var homeRouter = require('./routes/home');
app.use('/', homeRouter);

var addRouter = require('./routes/addBook');
app.use('/addBook', addRouter);

var editRouter = require('./routes/editBook');
<<<<<<< HEAD
app.use('/editBook', editRouter);

app.listen(3000, () => {
    console.log('Server running...');
});
=======
app.use('/edit', editRouter);
>>>>>>> 1b019d16935c7a22bb71d7aca1434559858fdd92
