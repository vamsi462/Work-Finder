const express = require("express");
const morgan = require('morgan');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const connectDB = require("./backend/database/db"); 
const app = express();
const authRoutes = require('./backend/routers/auth');
const userRoutes = require('./backend/routers/user');
const categoryRoutes= require('./backend/routers/category');
const workRoutes = require('./backend/routers/work');
const acceptedWorkRoutes = require('./backend/routers/acceptWork');
const cors = require('cors');


//database connection..
connectDB()

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());


//routers middleware

app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', workRoutes)
app.use('/api',acceptedWorkRoutes)



const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));