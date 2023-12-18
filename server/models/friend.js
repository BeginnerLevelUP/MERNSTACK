const {Schema,model}=require('mongoose')
const dateFormat=require('../utils/dateFormat')
const friendSchema=({
    username:{
        type:String,
        require:true,
    },
    added:{
        type:Date,
        default:Date.now(),
        get: (timestamp) => dateFormat(timestamp), //modifies the data whenever it is retrived 
    }
})

const Friend=model('Friend',friendSchema)
module.exports=Friend