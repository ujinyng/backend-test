const { ApolloServer } = require('apollo-server-express');

const resolvers = require('./resolver');

const typeDefs = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = server;
