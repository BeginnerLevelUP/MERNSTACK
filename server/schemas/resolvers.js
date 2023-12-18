//making your typedefs work
const { User, Thought, Friend } = require('../models'); //requiring the modles you created

// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers={
    Query:{
        //notice how the names of the querys are the same names in the typedefs
        users: async()=>{
            return User.find().populate('friends')
            /*this is what makes the querys actually working now you're acessing
            mongoose methods when you call the users query 
            .find() will return all instances of the user model if not given an arugment
            */
        },
        user:async(parent,{username})=>{
            return User.findOne({username}).populate('friends')
        },
        friends:async(parent,{username})=>{
            const params=username ? {username}:{} //basically if no user is found return an empty object
            return Friend.find(params).sort({added:-1}) // sorting by the destructed field added in friend model
        },
        friend:async(parent,{friendId})=>{
            return Friend.findOne({_id:friendId})
        } 
        //try to do the me route later
    }
}