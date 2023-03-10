const Thread = require('../../models/thread')
const User = require('../../models/user')
const Comment = require('../../models/comment')

function createPost(req, res, next) {
    const post = req.body
    post.owner = req.user._id
    const threadId = req.body.threadId
    Thread.findById(threadId)
        .then((thread) => {
            console.log(thread)
            thread.posts.push(post)
            return thread.save()
            
        })
        .then((thread) => {
            res.status(201).json({ thread: thread })
        })
        .catch(next)
}

// function indexPost(req, res, next) {
//     const postId = req.params
//     console.log(postId)
//     Thread.find({}.posts)
//         .populate('posts')
//         .populate('owner')
//         .then((threads) => {
//             return threads.map((threads) => threads)
//         })
//         .then((posts) => {
//             return res.status(200).json({ posts: posts })
//         })
//         .catch(next)
// }

// function showPost(req, res, next) {
//     Thread.findById(req.params.id)
//         .then((post) => {
//             if (post.owner.equals(req.user._id)) {
//                 return post.save()
//             } else {
//                 res.sendStatus(401);
//             }
//         })
//         .then((post) => {
//             return res.status(200).json({ post: post })
//         })
//         .catch(next)
// }

// function updatePost(req, res, next) {
//     Thread.findById(req.params.id)
//         .then((post) => {
//             if (post.owner.equals(req.user._id)) {
//                 return post.updateOne(req.body);
//             } else {
//                 res.sendStatus(401);
//             }
//         })
//         .then((post) => res.status(204).json(post))
//         .catch(next)
// }

function deletePost(req, res, next) {
    Thread.findById(req.params.id)
        .then((post) => {
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
    // indexPost,
    // showPost,
    // updatePost,
    deletePost
}