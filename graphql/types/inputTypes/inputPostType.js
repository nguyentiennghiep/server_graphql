const graphql = require('graphql');

// var commentType = require('./commentType');

var inputPostType = new graphql.GraphQLInputObjectType({
    name: 'inputPost',
    fields: () => ({
       author: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        title: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        content: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        imgURL:{
            type: graphql.GraphQLString
        },
        show: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLBoolean)
        }
    })
});

module.exports = inputPostType;