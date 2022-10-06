const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    lname:{
        type:String
    },
    age:{
        type:Number
    },
    email: {
        type:String
    }
    
})