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

type Query{
    users:[User]
    friends:[Friends]
}
`
module.exports=typeDefs