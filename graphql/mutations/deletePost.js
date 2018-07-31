var graphql = require('graphql');
var PostType = require('./../types/Post');
var PostModel = require('./../../models/postModel');

var deletePost = {
    type: PostType,
    args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve : (_,{id}) =>{
        var deletePost = PostModel.findByIdAndRemove(id).exec();
        return deletePost;
    }
}

module.exports = deletePost;