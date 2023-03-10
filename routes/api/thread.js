const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/users')
const threadCtrl = require('../../controllers/api/thread')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/new/:postId', threadCtrl.createThread)

router.patch("/:id", threadCtrl.updateThread)

router.delete('/:id', threadCtrl.deleteThread)

router.get('/', threadCtrl.indexThread)

router.get('/:id', threadCtrl.showThread)

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router