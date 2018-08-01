var graphql = require('graphql');
var PostType = require('./../types/Post');
var PostModel = require('./../../models/postModel');
// var commentInputType = require('../types/inputCommentType');
var inputPost = require('../types/inputTypes/inputPostType')

var addPost = {
    type: PostType,
    args: {
        input : {
            type : new graphql.GraphQLNonNull(inputPost)
        }
    },
    resolve : (_,{input}) =>{
        var pModel = new PostModel(input);
        var newPost = pModel.save();
        return newPost;
    }
}

module.exports = addPost;