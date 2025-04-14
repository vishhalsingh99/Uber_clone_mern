const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
<<<<<<< HEAD
const cookieParser = require('cookie-parser')
const connectToDb = require('./db/db')
const userRoute = require('./routes/user.route');
const captainRoute = require('./routes/captain.route');


connectToDb();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
=======

app.use(cors());

>>>>>>> cff07803ba8859a388a2659e0f915648e82fb129


app.get('/', (req, res) => {
    res.send("Hello World");
});
<<<<<<< HEAD
app.use('/user', userRoute);
app.use('/captain', captainRoute);
=======
>>>>>>> cff07803ba8859a388a2659e0f915648e82fb129

module.exports = app;