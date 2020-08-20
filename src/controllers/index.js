const express = require("express");
const app = require("../app");

const router = express.Router();

const postController = require('./post.controller')
const commentController = require('./comment.controller')
const likeController = require('./like.controller')

router.use((req, res, next) => {
    console.log('req.body', req.body)
    next()
})
router.get('/', postController.home)
router.get('/post/:id', postController.postById)
router.get('/post', postController.createForm)
router.post('/post', postController.create)
router.post('/comment', commentController.create)
router.post('/like', likeController.create)

module.exports = router