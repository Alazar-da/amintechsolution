require('dotenv').config()
require("./config/database").connect()




const express = require('express')
//var bodyparser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const cors = require('cors')

var corsOptions = {
  origin: "http://localhost:3000"
};




const app = express()

const message = require("./routes/Message").message
app.use(cookieParser())
app.use("/message",message)

app.use(cors(corsOptions))



//var urlencodedParser = bodyparser.urlencoded({extended:true})
var urlencodedParser2 = express.urlencoded({extended:true})

app.use(urlencodedParser2);

app.use(express.json())












var port = 5000


app.listen(port,()=>{
    console.log(`listning at port ${port}`)
})




  

  









