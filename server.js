const express = require("express");

const app = express();


app.get('/',(req,res)=>{
    res.json("hello")
})  



const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));