const Post = require('../../models/post')
const User = require('../../models/user')
const Comment = require('../../models/comment')

function createPost(req, res, next) {
    console.log(req.body)
    const post = req.body
    post.owner = req.user._id
    Post.create(post)
        .then((post) => {
            res.status(201).json({ post: post })
        })
        .catch(next)
}

function indexPost(req, res, next) {
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

function showPost(req, res, next) {
    Post.findById(req.params.id)
        .then((post) => {
            if (post.owner.equals(req.user._id)) {
                return post.save()
            } else {
                res.sendStatus(401);
            }
        })
        .then((post) => {
            return res.status(200).json({ post: post })
        })
        .catch(next)
}

function updatePost(req, res, next) {
    Post.findById(req.params.id)
        .then((post) => {
            if (post.owner.equals(req.user._id)) {
                return post.updateOne(req.body);
            } else {
                res.sendStatus(401);
            }
        })
        .then((post) => res.status(204).json(post))
        .catch(next)
}

function deletePost(req, res, next) {
    Post.findById(req.params.id)
        .then((post) => {
            console.log(post)
            if (post.owner.equals(req.user._id)) {
                return post.deleteOne();
            } else {
                res.sendStatus(401);
            }
        })
        .then(() => res.sendStatus(204))
        .catch(next)
}

module.exports = {
    createPost,
    indexPost,
    showPost,
    updatePost,
    deletePost
}