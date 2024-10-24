var express = require("express");
var app = express();
var port = 4000


require('./Connection/conn');


app.get('/',(req,res)=>{
    res.send({
        message:"Hii we have started our backend project in Node js"
    })
})

app.listen(port,()=>{console.log("our project is started on port 4000")})
