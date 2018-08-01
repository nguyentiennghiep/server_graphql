var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentType = new Schema({
    message: { type: String }
})

const postModel = new Schema({
    author: { type: String },
    title: { type: String },
    content: { type: String },
    comment: [commentType],
    show: { type: Boolean }
});

module.exports = mongoose.model('posts', postModel); 