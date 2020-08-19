const express = require("express");
const app = require("../app");

const router = express.Router();

const postController = require('./post.controller')
const commentController = require('./comment.controller')
const likeController = require('./like.controller')

router.get('/', postController.home)
router.get('/post/:id', postController.postById)
router.get('/post', postController.createForm)
router.post('/post', postController.create)
router.post('/comment', commentController.create)

module.exports = router