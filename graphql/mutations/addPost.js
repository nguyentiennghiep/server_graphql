var graphql = require('graphql');
var PostType = require('./../types/Post');
var PostModel = require('./../../models/postModel');

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