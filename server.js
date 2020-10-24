const express = require("express");
const morgan = require('morgan');

const app = express();


const connectDB = require('./backend/database/db'); 
//database connection..
connectDB()

//middlewares

app.use(morgan('dev'))


const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));