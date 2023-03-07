const express = require('express');
const mongoose = require('mongoose');
const wordtables = require('./models/WordTable');
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.listen(3000, console.log("Go!!"));



mongoose.connect("mongodb+srv://thhisstory:FunairiFFF324@cluster0.ourgdrv.mongodb.net/test"
).then(()=>
    console.log("Connecting")
)
.catch ((err)=>console.log("error"));

// API Goes
app.get("/", async(req, res)=>{
    try{
        const allWords = await wordtables.find();
        res.status(200).json(allWords);
    }catch(err){
        console.log("error1")
    }
});
