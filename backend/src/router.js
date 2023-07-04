const express = require('express');
const router = express.Router();

const authControllers = require('./controllers/auth');
const postsControllers = require('./controllers/post');

router.post('/register', authControllers.register );
router.post('/login', authControllers.login);
router.post('/logout', authControllers.logout);

router.get('/posts', postsControllers.getPosts);
router.post('/posts', postsControllers.addPost);

module.exports = router;