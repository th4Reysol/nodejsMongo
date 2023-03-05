const express = require('express');
const mongoose = require('mongoose');
const WordTable = require('./models/WordTable');
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.listen(3000, console.log("動く"));



mongoose.connect("mongodb+srv://thhisstory:FunairiFFF324@cluster0.ourgdrv.mongodb.net/test"
).then(()=>
    console.log("つないだ")
)
.catch ((err)=>console.log("error"));

// API発信部分
app.get("http://localhost:3000/", async(req, res)=>{
    try{
        const allWords = await WordTable.find();
        res.status(200).json(allWords);
    }catch(err){
        console.log("error1")
    }
});
