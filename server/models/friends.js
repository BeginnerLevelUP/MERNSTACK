const { Schema, model } = require('mongoose');
// destructing what you need

const friendsSchema=new Schema({
    name:{
        type:String,
        requried:true,
        trim:true,
    }
})
const Friends=model('Friends',friendsSchema)
module.exports=Friends