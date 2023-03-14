const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./comment')

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments:[commentSchema]
})

module.exports = mongoose.model('Post', postSchema)