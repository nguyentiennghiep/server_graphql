var graphql = require('graphql');
var PostType = require('./../types/Post');
var PostModel = require('./../../models/postModel');

var updatePost = {
    type: PostType,
    args: {
        id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
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
    resolve: (_, input) => {
        var uPost = {
            author: input.author,
            title: input.title,
            content: input.content,
            show: input.show
        };
        var updatePost = PostModel.findByIdAndUpdate(input.id,uPost,{new : true});
        return updatePost
        
    }
}

module.exports = updatePost;