const express = require("express")
const cors = require("cors")

const app = express()


var email = "maha@gmail.com"
var password = "54321"

//app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/login',function(req,res){
   // console.log(req)
   if(email === req.query.email && password === req.query.password)
   {
     res.send(true)
   }
   else
   {
    res.send(false)
   }

})

app.listen(8000,function(){
    console.log("server started")
})