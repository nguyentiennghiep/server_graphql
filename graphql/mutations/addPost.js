var graphql = require('graphql');
var PostType = require('./../types/Post');
var PostModel = require('./../../models/postModel');
var commentInputType = require('../types/inputCommentType');

var addPost = {
    type: PostType,
    args: {
        author: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        title: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        content: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        comment : {
            type: new graphql.GraphQLList(commentInputType)
        },
        show: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLBoolean)
        }
    },
    resolve : (_,input) =>{
        var pModel = new PostModel(input);
        var newPost = pModel.save();
        return newPost;
    }
}

module.exports = addPost;