const express = require("express");
const mongoose = require("mongoose");
const auth = require("./server/routes/auth");
const search = require("./server/routes/search");
const myresume = require("./server/routes/myresume");
const path = require("path");
const app = express();
const port = 5005;
const databaseUrl = "mongodb://localhost:27017/resume";

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",auth);
// app.use("/search",search);
// app.use("/myresume",myresume);
app.use(express.static(path.join(__dirname, 'dist/Resume')));

mongoose.connect(databaseUrl,{useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
   if(err){
       throw err;
   }else {
       console.log("connected with database!");
   }
});

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/Resume/index.html'));
});

app.listen(port,()=>console.log(`server is running on localhost:${port}`));
