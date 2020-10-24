const express = require("express");
const morgan = require('morgan');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const connectDB = require("./backend/database/db"); 
const app = express();
const authRoutes = require('./backend/routers/auth');
const userRoutes = require('./backend/routers/user');


//database connection..
connectDB()

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());


//routers middleware

app.use('/api', authRoutes)
app.use('/api', userRoutes)



const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));