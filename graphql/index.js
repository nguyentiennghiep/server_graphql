var  graphql = require('graphql');
var queryType = require('./queries/listPost');

var postSchema = new graphql.GraphQLSchema({
    query: queryType
});

module.exports = postSchema;