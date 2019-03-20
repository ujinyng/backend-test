const { ApolloServer, gql } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const model = require('../../db/mongoose').model;

const typeDefs = gql`
  scalar Date

  type Post {
    id: ID!
    author: Int
    title: String
    content: String
    date: Date
    comment: String
  }
  type Query {
    hello: String
  }
`;

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      // value from the client
      return new Date(value);
    },
    serialize(value) {
      // value sent to the client
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = server;
