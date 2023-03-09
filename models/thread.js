const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadSchema = new Schema({
    topic:{
        type: String,
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    posts:[postSchema]
    
})

module.exports = mongoose.model('Thread', threadSchema)