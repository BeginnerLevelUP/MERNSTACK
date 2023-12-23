//making your typedefs work
const { User, Friend } = require('../models/index'); //requiring the modles you created

const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers={
    Query:{
        //notice how the names of the querys are the same names in the typedefs
        users: async()=>{
            return await User.find({}).populate('friends')
            /*this is what makes the querys actually working now you're acessing
            mongoose methods when you call the users query 
            .find() will return all instances of the user model if not given an arugment
            */
        },
        user:async(parent,{username})=>{
            return await User.findOne({username}).populate('friends')
        },
        friends:async(parent,{_id})=>{
            // const params=username ? {username}:{} //basically if no user is found return an empty object
            return await Friend.findById({_id}).sort({added:-1}) // sorting by the destructed field added in friend model
        },
        friend:async(parent,{friendId})=>{
            return await Friend.findOne({_id:friendId})
        },
        allFriends:async()=>{
            return await Friend.find({})
        }
        //try to do the me route later
    },
    Mutation:{
        addUser:async (parent,{username,email,password})=>{
            const user=await User.create({username,email,password})
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError; // from utils/auth
            }

            const correctPw = await user.isCorrectPassword(password);// made method in models

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addFriend:async(parent,{userId,friendId})=>{
            return await User.findByIdAndUpdate(
                {_id:userId},
                {$addToSet:{friends:friendId}}
            ).populate('friends')
        }
    }
}
module.exports = resolvers;