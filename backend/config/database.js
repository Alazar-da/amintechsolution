const mongoose = require('mongoose')

mongoose.set('strictQuery',false)


const connect = async() =>{

    try {
        mongoose.connect("mongodb+srv://imranhayredin89:p3Xp8z7dwdYKBDyi@cluster0.gpom6d9.mongodb.net/AminTech?retryWrites=true&w=majority")
        console.log("connected")
    } catch (error) {
        console.log(error)
        
    }


}

module.exports = {connect}