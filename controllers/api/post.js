const Post = require('../../models/post')
const User = require('../../models/user')
const Comment = require('../../models/comment')

function createPost(req, res, next){
    const post = req.body
    post.owner = req.user._id
    Post.create(post)
    .then((post) => {
        res.status(201).json({post: post})
    })
     .catch(next)
}

function indexPost(req, res, next){
    Post.find({})
        .populate('owner')
        .then((posts) => {
            return posts.map((posts) => posts)
        })
        .then((posts) => {
            return res.status(200).json({ posts: posts })
        })
        .catch(next)
}

module.exports = {
    createPost,
    indexPost
}