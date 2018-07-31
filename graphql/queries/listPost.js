var graphql = require('graphql');
var Post = require('../types/Post');
var postModel = require('../../models/postModel')

var listPost = {
  type: new graphql.GraphQLList(Post),
  resolve: function () {
    var posts = postModel.find().exec();
    return posts;
  }
}

module.exports = listPost;