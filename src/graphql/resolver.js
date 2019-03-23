const model = require('../../db/mongoose').model;
const Post = model.post;
const Comment = model.comment;
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const resolvers = {
  Query: {
    readPostList: async (_, { n: n, offset = 0 }) => {
      const find = await Post.find({}).exec();
      const totalCount = find.length;
      const result =
        n === undefined ? find.slice(offset) : find.slice(offset, offset + n);
      const results = {
        result,
        totalCount,
        offset,
      };
      return results;
    },
    readCommentList: async (_, { n: n, offset = 0 }) => {
      const find = await Comment.find({}).exec();
      const totalCount = find.length;
      const result =
        n === undefined ? find.slice(offset) : find.slice(offset, offset + n);
      const results = {
        result,
        totalCount,
        offset,
      };
      return results;
    },
    readPostListbyUser: async (_, { author: author, n: n, offset = 0 }) => {
      const find = await Post.find({ author: author }).exec();
      const totalCount = find.length;
      const result =
        n === undefined ? find.slice(offset) : find.slice(offset, offset + n);
      const results = {
        result,
        totalCount,
        offset,
      };
      return results;
    },
    readCommentListbyUser: async (_, { author: author, n: n, offset = 0 }) => {
      const find = await Comment.find({ author: author }).exec();
      const totalCount = find.length;

      const result =
        n === undefined ? find.slice(offset) : find.slice(offset, offset + n);
      const results = {
        result,
        totalCount,
        offset,
      };
      return results;
    },
    readCommentListbyPost: async (_, { post: post, n: n, offset = 0 }) => {
      const find = await Comment.find({ post: post }).exec();
      const totalCount = find.length;

      const result =
        n === undefined ? find.slice(offset) : find.slice(offset, offset + n);
      const results = {
        result,
        totalCount,
        offset,
      };
      return results;
    },
  },
  ISODate: new GraphQLScalarType({
    name: 'ISODate',
    description: 'JavaScript Date object as an ISO timestamp',
    serialize(value) {
      return value instanceof Date ? value.toISOString() : null;
    },
    parseValue(value) {
      return returnOnError(
        () => (value == null ? null : new Date(value)),
        null,
      );
    },
    parseLiteral(ast) {
      return ast.kind === Kind.STRING ? parseValue(ast.value) : null;
    },
  }),
};

module.exports = resolvers;
