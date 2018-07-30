var  graphql = require('graphql');
var Post = require('../types/Post');
var postModel = require('../../models/postModel')
const fakedb = [{
    _id: '1',
    author: 'toonz',
    title: 'What is Lorem Ipsum?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    , show: true
},
{
    _id: '2',
    author: 'toonz',
    title: 'Lorem Ipsum?',
    content: 'Lorem Ipsum i galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    , show: false
}
];


var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      posts: {
        type: new graphql.GraphQLList(Post),
        resolve: function () {
          var posts = postModel.find().exec();
          console.log(posts);
          return posts;
        }
      }
    }
  });

module.exports = queryType;