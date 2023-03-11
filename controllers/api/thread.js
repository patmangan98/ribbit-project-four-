
const Thread = require('../../models/thread')

function createThread(req, res, next){
    const thread = req.body
    thread.owner = req.user._id
    Thread.create(thread)
    .then((thread) => {
        res.status(201).json({ thread: thread })
    })
     .catch(next)
}

function indexThread (req, res, next){
    Thread.find({})
        .populate('owner')
        .then((threads) => {
            return threads.map((threads) => threads)
        })
        .then((threads) => {
            return res.status(200).json({ threads: threads })
        })
        .catch(next)
}

function showThread(req, res, next){
    Thread.findById(req.params.id)
    .then((thread) =>{
        if (thread.owner.equals(req.user._id)) {
            return thread.save()
        } else {
            res.sendStatus(401);
        }
    })
    
    .catch(next)
}

function updateThread(req, res, next) {
    Thread.findById(req.params.id)
    .then((thread) => {
        if (thread.owner.equals(req.user._id)) {
            return thread.updateOne(req.body);
        } else {
            res.sendStatus(401);
        }
    })
    .then((thread) => res.status(204).json(thread))
    .catch(next)
}

function deleteThread(req, res, next){
    Thread.findById(req.params.id)
    .then((thread) => {
        if (thread.owner.equals(req.user._id)) {
            return thread.deleteOne();
        } else {
            res.sendStatus(401);
        }
    })
    .then(() => res.Status(204))
    .catch(next)
}


module.exports = {
    createThread,
    indexThread,
    showThread,
    updateThread,
    deleteThread
}