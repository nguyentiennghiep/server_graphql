const graphql = require('graphql');

var inputCommentType = new graphql.GraphQLInputObjectType({
    name: 'commentInput',
    fields:{
        message: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    }
});

module.exports = inputCommentType;