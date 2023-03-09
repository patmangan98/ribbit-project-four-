const Thread = require('../../models/thread')
const Post = require('../../models/post')

function createThread(req, res, next){
    const thread = req.body
    post.owner = req.user._id
    Post.create(post)
    .then((thread) => {
        res.status(201).json({thread: thread})
    })
     .catch(next)
}

function indexThread (req, res, next){
    Post.find({})
        .populate('owner')
        .then((threads) => {
            return threads.map((threads) => threads)
        })
        .then((threads) => {
            return res.status(200).json({ threads: threads })
        })
        .catch(next)
}

module.exports = {
    createThread,
    indexThread
}