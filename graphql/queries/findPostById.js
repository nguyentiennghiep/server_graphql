const graphql = require('graphql');
const PostType = require('./../types/Post');
const PostModel = require('./../../models/postModel');

var findPostById = {
    type: PostType,
    args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: (_, { id }) => {
        var findPost = PostModel.findById(id).exec();
        return findPost;
    }
};

module.exports = findPostById;

