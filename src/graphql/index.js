const { ApolloServer, gql } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const model = require('../../db/mongoose').model;
const Post = model.post;
const Comment = model.comment;

const typeDefs = gql`
  scalar Date

  type Post {
    _id: ID!
    author: Int
    title: String
    content: String
    date: Date
    comment: [String]
  }
  type Comment {
    _id: ID!
    post: Post
    author: Int
    content: String
    date: Date
  }
  type Query {
    getPosts: [Post]
    getComments: [Comment]
  }
`;

const resolvers = {
  Query: {
    getPosts: async () => await Post.find({}).exec(),
    getComments: async () => await Comment.find({}).exec(),
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
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
