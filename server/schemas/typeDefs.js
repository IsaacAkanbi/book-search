const {gql} = require('apollo-server-express');

const typeDefs = gql`
 type Book {
     bookId: ID!
     authors: [String!]
     description: String!
     image: String!
     link: String!
     title: String!
    }

  type Auth {
    token: ID!
    user: User
  }

 type User {
   _id: ID!
   username: String!
   email: String!
   password: String!
   savedBooks: [Book]
   bookCount: Int
   }

 type Query {
   books: [Book]
   users: [User]
   }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;

/*
type Mutation {
    createBook(): Book
    createUser(): User
   }
   */