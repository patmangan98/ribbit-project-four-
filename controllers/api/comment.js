const Comment = require('../../models/comment')
const Post = require('../../models/post')


function createComment(req, res, next){
    const comment = req.body
    comment.owner = req.user._id
    Post.create(comment)
    .then((comment) => {
        res.status(201).json({comment: comment})
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

function deleteComment(req, res, next){
    Post.findById(req.params.id)
    .then((comment) => {
        comment.id(req.body.id).remove()
        return comment.save()
    })
    .then((comment) => res.Status(204))
    .catch(next)
}

module.exports = {
    createComment,
    indexComment,
    showComment,
    // updateComment,
    deleteComment
}