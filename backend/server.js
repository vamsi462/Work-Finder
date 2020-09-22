import express from 'express';
import data from'./data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routers/userRouter';
import bodyParser from 'body-parser'
import categoryRoute from './routers/categoryRoute'
import uploadRoute from "./routers/uploadRoute"
import acceptWorkRoute from "./routers/acceptWorkRoute"
import cors from "cors"
dotenv.config();


const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true

}).catch(error => console.log(error.reason));







const app=express();
app.use(cors())
app.use(bodyParser.json());
app.use('/api/users',userRoute);
app.use('/api/category',categoryRoute);
app.use('/api/uploads',uploadRoute)
app.use('/api/acceptwork',acceptWorkRoute)
//  app.use('/api/ongoingworks',acceptWorkRoute)


// app.get('/api/construction',(req,res) => {
//     res.send(data.constructionworks);
// })

// app.get("/api/loading",(req,res) => {
//     res.send(data.loadingworks);
// })

// app.get("/api/farm",(req,res) => {
//     res.send(data.farmworks);
// })

// app.get("/api/gardening",(req,res) => {
//     res.send(data.gardeningworks);
// })

// app.get("/api/cleaning",(req,res) => {
//     res.send(data.cleaningworks);
// })
// app.get("/api/findwork/:id",(req,res) => {
//     const categoryId = req.params.id;
//     const conPost = data.constructionworks.find(x=>x.id === categoryId);
//     if(conPost)
//     res.send(conPost);
//     else
//     res.status(404).send({msg:"Work Not Found."})
//  })


app.listen(5000,() => { console.log("Server started at http://localhost:5000")})