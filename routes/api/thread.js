const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/users')
const threadCtrl = require('../../controllers/api/thread')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/new', threadCtrl.createThread)

router.get('/:id', threadCtrl.indexThread)

router.patch("/:id", threadCtrl.updateThread)

router.delete('/:id', threadCtrl.deleteThread)

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router