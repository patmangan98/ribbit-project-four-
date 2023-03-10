const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/users')
const commentCtrl = require('../../controllers/api/comment')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/new', commentCtrl.createComment)

router.get('/:id', commentCtrl.showComment)

// router.patch("/:id", commentCtrl.updateComment)

router.delete('/:id', commentCtrl.deleteComment)

router.get('/:id', commentCtrl.indexComment)

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router