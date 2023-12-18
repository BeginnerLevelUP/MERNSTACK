import { gql } from '@apollo/client';

export const ADD_USER=gql`
mutation Mutation($name: String!) {
  addUser(name: $name) {
    token
    user {
      name
      _id
    }
  }
}
`
export const LOGIN=gql`
mutation Login($name: String!) {
  login(name: $name) {
    token
    user {
      name
      _id
    }
  }
}
`