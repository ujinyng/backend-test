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
    readPostList(n: Int, offset: Int): PostResult
    readCommentList(n: Int, offset: Int): CommentResult
    readPostListbyUser(author: Int!, n: Int, offset: Int): PostResult
    readCommentListbyUser(author: Int!, n: Int, offset: Int): CommentResult
    readCommentListbyPost(post: Int!, n: Int, offset: Int): CommentResult
  }
`;

module.exports = typeDefs;
