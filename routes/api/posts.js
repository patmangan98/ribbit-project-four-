const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/users')
const postsCtrl = require('../../controllers/api/post')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/new', postsCtrl.createPost)

router.get('/:id', postsCtrl.indexPost)

router.patch("/:id", postsCtrl.updatePost)

router.delete('/:id', postsCtrl.deletePost)


router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router