const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/users')
const postsCtrl = require('../../controllers/api/post')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/new', postsCtrl.createPost)

// router.patch("/:id", postsCtrl.updatePost)

router.delete('/:id', postsCtrl.deletePost)

// router.get('/:postId', postsCtrl.indexPost)

// router.get('/:id', postsCtrl.showPost)

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router