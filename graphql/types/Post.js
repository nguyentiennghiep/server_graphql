const graphql = require('graphql');
var postType = new graphql.GraphQLObjectType({
    name: 'Post',
    fields:  {
        _id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
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
        // createAt: {
        //     type: new graphql.GraphQLNonNull(GraphQLDateTime)
        // }
        show: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLBoolean)
        }
    }
});

module.exports = postType;