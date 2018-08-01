const graphql = require('graphql');

var commentType = new graphql.GraphQLObjectType({
    name: 'comment',
    fields:{
        _id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        message: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    }
});

module.exports = commentType;