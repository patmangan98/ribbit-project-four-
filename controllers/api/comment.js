const Post = require('../../models/post')
const Thread = require('../../models/thread')


function createComment(req, res, next) {
    const comment = req.body
    comment.owner = req.user._id
    const threadId = req.body.threadId

    Thread.findOne({ _id: threadId })
        .then((thread) => {
            const postIndex = thread.posts.findIndex((posts) => posts)
            const post = thread.posts[postIndex]
            post.comments.push(comment)
            const commentObj = {}
            for (let j = 0; j < post.comments.length; j++) {
                const commentIndex = post.comments[j]
                commentObj[commentIndex._id] = commentIndex
            }
            return thread.save()
        })
        .then((post) => {
            res.status(201).json({ post: post })
        })
        .catch(next)
}


function deleteComment(req, res, next) {
    const commentId = req.params.commentId
    const threadId = req.params.threadId

    Thread.findOne({ _id: threadId })
        .then((thread) => {
            const postIndex = thread.posts.findIndex((post) => {
                return post.comments.some((comment) => comment._id == commentId)
            })
            const post = thread.posts[postIndex]
            post.comments.id(commentId).remove()
            return thread.save()
        })
        .then(() => {
            res.sendStatus(204)
        })
        .catch(next)
}


function indexComment(req, res, next) {
    const postId = req.params.postId
    Post.findById(postId)
        .then((post) => {
            return post.comments.map((comments) => comments)
        })
        .then((comments) => {
            res.sendStatus(200).json({ comments: comments })
        })
        .catch(next)
}
module.exports = {
    createComment,
    deleteComment,
    indexComment
}