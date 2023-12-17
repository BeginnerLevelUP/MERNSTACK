import { gql } from '@apollo/client';
// need to make it work
// https://www.apollographql.com/docs/apollo-server/migration/#gql-graphql-tag
export const QUERY_USER=gql`
query Query {
  users {
    name
  }
}
`
