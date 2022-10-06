const mongoose = require("mongoose")
const userSchema= new mongoose.Schema({
    name:{
        type:String
    },
    date:{
        type:String
    },
    add:{
        type:String
    },

    st:{
        type:String
    },
    zip:{
        type:Number
    },
    grade:{
        type:Number
    },
    school:{
        type:String
    },
    Gender:{
        type:String
    },
    note:{
        type:String
    },
    Adult:{
        type:String
    },
    relationship:{
        type:String
    },
    Parentadd:{
        type:String
    },
    sts:{
        type:String
    },
    zips:{
        type:String
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    },
    poe:{
        type:String
    },
    notes:{
        type:String
    }
   
})


const User = mongoose.model('User', userSchema)
module.exports =User