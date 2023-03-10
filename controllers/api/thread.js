// const Thread = require('../../models/thread')
// const Post = require('../../models/post')

// function createThread(req, res, next){
//     const thread = req.body
//     thread.owner = req.user._id
//     Thread.create(thread)
//     .then((thread) => {
//         res.status(201).json({thread: thread})
//     })
//      .catch(next)
// }

// function indexThread (req, res, next){
//     Post.find({})
//         .populate('owner')
//         .then((threads) => {
//             return threads.map((threads) => threads)
//         })
//         .then((threads) => {
//             return res.status(200).json({ threads: threads })
//         })
//         .catch(next)
// }

// function showThread(req, res, next){
//     Post.findById(req.params.id)
//     .then((thread) => res.status(200).json({thread: thread}))
//     .catch(next)
// }

// function updateThread(req, res, next) {
//     Post.findById(req.params.id)
//     .then((thread) => {
//         const thread = thread.id(req.body.id)
//         thread.topic = req.body.text
//         return thread.save()
//     })
//     .then((thread) => res.status(204).json(thread))
//     .catch(next)
// }

// function deleteThread(req, res, next){
//     Post.findById(req.params.id)
//     .then((thread) => {
//         thread.id(req.body.id).remove()
//         return thread.save()
//     })
//     .then((thread) => res.Status(204))
//     .catch(next)
// }

// module.exports = {
//     createThread,
//     indexThread,
//     showThread,
//     updateThread,
//     deleteThread
// }