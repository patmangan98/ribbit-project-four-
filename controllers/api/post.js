const Thread = require('../../models/thread')

function createPost(req, res, next) {
    const post = req.body
    console.log(post)
    post.owner = req.user._id
    const threadId = req.body.threadId
   
    Thread.findById(threadId)
        .then((thread) => {
            thread.posts.push(post)
            return thread.save()
        })
        .then((thread) => {
            res.status(201).json({ thread: thread })
        })
        .catch(next)
}



function showPost(req, res, next) {
    const postId = req.params.id

    Thread.findOne({ 'thread.posts._id': postId })
        .then((thread) => {
            const postIndex = thread.posts.findIndex(post => post._id == postId)
            const post = thread.posts[postIndex]
            return post
        })
        .then((post) => {
            return res.status(200).json({ post: post })
        })
        .catch(next)
}



function deletePost(req, res, next) {
    const postId = req.params.postId
    const threadId = req.params.threadId

    Thread.findById(threadId)
        .then((thread) => {
            const postIndex = thread.posts.findIndex(post => post._id == postId)
            const post = thread.posts[postIndex]
            if (post.owner.equals(req.user._id)) {
                thread.posts.id(postId).remove()
            } else {
                res.sendStatus(401)
            }
            return thread.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
}

module.exports = {
    createPost,
    showPost,
    deletePost
}