const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = require('./post')

const threadSchema = new Schema({
    topic:{
        type: String,
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    posts: {
        type: [postSchema.schema],
        required: false,
    }
    
})

module.exports = threadSchema