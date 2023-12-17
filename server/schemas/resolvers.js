// https://www.apollographql.com/docs/apollo-server/v2/data/resolvers
const {User,Friends}=require("../models")
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers={
    Query:{
        // references what you did in the type defs
        users: async()=>{
            return await User.find({}).populate('friends')
        },
            friends: async () => {
            return await Friends.find({})
        }
    },
    Mutation:{
        addUser: async(parent,{name})=>{
           const user= await User.create({ name })
            const token = signToken(user);
            return {token,user}
        },
        login: async (parent, { name }) => {
            const user = await User.findOne({ name })
            const token = signToken(user);

            if(!user){
                throw AuthenticationError
            }
            return { token, user }
        },

    }
}
module.exports=resolvers