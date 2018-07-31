var  graphql = require('graphql');
var queryType = require('./queries/index');
var mutation = require('./mutations/index');

var postSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name : 'Query',
        fields : queryType
    }),
    mutation :new graphql.GraphQLObjectType({
        name : 'Mutation',
        fields : mutation
    })
});

module.exports = postSchema;