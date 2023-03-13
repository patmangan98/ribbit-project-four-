const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/users')
const postsCtrl = require('../../controllers/api/post')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/new', postsCtrl.createPost)

router.delete('/:threadId/:postId', postsCtrl.deletePost)

router.get('/:id', postsCtrl.showPost)

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router