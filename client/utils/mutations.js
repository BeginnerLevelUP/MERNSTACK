import { gql } from '@apollo/client';

export const ADD_USER=gql`
mutation AddUser($name: String!) {
  addUser(name: $name) {
    name
  }
}
`
export const LOGIN=gql`
mutation Mutation($name: String!) {
  login(name: $name) {
    user {
      name
    }
  }
}`