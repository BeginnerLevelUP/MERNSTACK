// https://www.apollographql.com/docs/apollo-server/v2/api/graphql-tools/
const typeDefs = `
type User{
    _id:ID
    name:String
    friends:[Friends]
}

type Friends{
_id:ID
name:String
}

  type Auth {
    token: ID!
    user: User
  }

type Query{
    users:[User]
    friends:[Friends]
}

type Mutation{
    addUser(name:String!):Auth
    login(name:String!):Auth
}
`
module.exports=typeDefs