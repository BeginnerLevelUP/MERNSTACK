const { Schema, model } = require('mongoose');
// destructing what you need

const userSchema = new Schema( //constrcutor
    //takes in object
    {
        //properties with objects later beet the fields in your databse
        name: {
            type: String,
            required: true,
            trim: true
            // https://mongoosejs.com/docs/validation.html#built-in-validators
            // https://mongoosejs.com/docs/schematypes.html
        },
        // subDoc? takes in an array of the frineds schema?
        friends:[{
           // https://mongoosejs.com/docs/schematypes.html#objectids
           type:Schema.Types.ObjectId,
           ref:'Friends'
        }]
    }
)

const Item=model('User',userSchema)
module.exports=Item