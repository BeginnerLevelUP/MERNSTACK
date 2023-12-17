// https://www.apollographql.com/docs/apollo-server/v2/data/resolvers
const {User,Friends}=require("../models")

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
            return User.create({name})
        },
    }
}
module.exports=resolvers