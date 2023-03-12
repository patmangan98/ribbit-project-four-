const Comment = require('../../models/comment')
const post = require('../../models/post')
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




// function deleteComment(req, res, next) {
//     const commentId = req.params.id
//     const threadId = req.body.threadId
//     Thread.findOne({ _id: threadId })
//         .then((thread) => {
//             const postIndex = thread.posts.findIndex((posts) => posts)
//             const post = thread.posts[postIndex].comments
//             console.log(post)
//             post.remove(commentId)
//             const commentObj = {}

//             for (let j = 0; j < post.comments.length; j++) {
//                 const commentIndex = post.comments[j]
//                 commentObj[commentIndex._id] = commentIndex
//             }

//             return thread.save()
//         })
//         .then((post) => {
//             res.status(200).json({ post: post })

//         })
//         .catch(next)
// }


// function deleteComment(req, res, next) {
//     const commentId = req.params.id
//     // console.log(commentId)
//     const threadId = req.body.threadId
//     Thread.findOne({ _id: threadId })
//         .then((thread) => {
//             console.log(thread.posts)
//             // const postIndex = thread.posts.findIndex((posts) => posts)
//             // const post = thread.posts[postIndex]
//             // console.log(post)
//             // return post.comments.remove()
//             return thread.post.comments.deleteOne()
//         })

//         .then((post) => {
//             res.status(204).json({ post: post })
//         })
//         .catch(next)
// }



function deleteComment(req, res, next) {
    const commentId = req.params.id
    const threadId = req.body.threadId

    Thread.findOne({ _id: threadId })
        .then((thread) => {
            const postsObj = thread.posts.reduce((obj, post) => {
                obj[post._id] = post
                return obj
            }, {})
            console.log(postsObj)

            const postIndex = thread.posts.findIndex((post) => {
                return post.comments.some((comment) => comment._id == commentId)
            })
            const post = thread.posts[postIndex]

            post.comments.id(commentId).remove()
            return thread.save()
        })
        .then(() => {
            res.status(204).json({})
        })
        .catch(next)
}


















// function indexComment (req, res, next){
//     Post.find({})
//         .populate('owner')
//         .then((comments) => {
//             return comments.map((comments) => comments)
//         })
//         .then((comments) => {
//             return res.status(200).json({ comments: comments })
//         })
//         .catch(next)
// }

// function showComment(req, res, next){
//     Post.findById(req.params.id)
//     .then((comment) => res.status(200).json({comment: comment}))
//     .catch(next)
// }

// function updateComment(req, res, next) {
//     Post.findById(req.params.id)
//     .then((comment) => {
//         const comment = comment.id(req.body.id)
//         comment.topic = req.body.text
//         return comment.save()
//     })
//     .then((comment) => res.status(204).json(comment))
//     .catch(next)
// }


module.exports = {
    createComment,
    // indexComment,
    // showComment,
    // updateComment,
    deleteComment
}