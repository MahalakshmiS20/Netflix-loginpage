const express = require("express")
const cors = require("cors")

const app = express()


var email = "maha@gmail.com"
var password = "54321"

app.use(express.json())
app.use(cors())

app.post('/login',function(req,res){
   // console.log(req)
   if(email===req.body.email && password===req.body.password)
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