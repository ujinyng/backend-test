const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar ISODate

  type Post {
    _id: ID!
    author: ID!
    title: String
    content: String
    date: ISODate
    comment: [ID!]
  }
  type Comment {
    _id: ID!
    post: ID!
    author: ID!
    content: String
    date: ISODate
  }
  type PostResult {
    result: [Post]
    totalCount: Int
    offset: Int
  }
  type CommentResult {
    result: [Comment]
    totalCount: Int
    offset: Int
  }
  type Query {
    getAllPosts(n: Int, offset: Int): PostResult
    getAllComments(n: Int, offset: Int): CommentResult
    getPostsbyUserId(author: Int!, n: Int, offset: Int): PostResult
    getCommentsbyUserId(author: Int!, n: Int, offset: Int): CommentResult
    getCommentsbyPostId(post: Int!, n: Int, offset: Int): CommentResult
  }
`;

module.exports = typeDefs;
