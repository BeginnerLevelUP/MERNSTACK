// the structure of your shcemas const 
typedefs=`
#type __ is basically creating your models since my types are one to one to what my models look like its very easy to understand
type User {
    _id: ID
    username: String
    email: String
    password: String
    friends:[Friend]
}

type Friend {
    _id: ID
    username: String
    added: String
}

type Auth{
    token:ID!
    user:User
}
#type query these are your actuall api calls querys would be the equvalient to get since you only want to retrieve data from the database

type Query{
    #the users query returns an array of all Users
users: [User]
allFriends:[Friend]
user(username: String!): User
    # in the parentheis your passing in a required parmeter(!) of username that will returned a User type(: User)
friends(_id:String!): [Friend]
#since it's a parameter you can just make a name you seem fit
friend(friendId: String!): Friend

}

type Mutation{
    addUser(username:String!,email:String!,password:String!):Auth
    login(email: String!, password: String!): Auth
    addFriend(userId:String!,friendId:String!):User
}
`
module.exports=typedefs
