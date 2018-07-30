var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const postModel = new Schema({
    author: { type: String },
    title:{type : String},
    content:{type: String },
    show: {type: Boolean}
});

module.exports =  mongoose.model('Posts', postModel); 