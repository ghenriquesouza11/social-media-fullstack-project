const postsModel = require('../models/posts');
const jwt = require('jsonwebtoken');

const getPosts = async (req, res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'secretkey', async (error, userInfo) => {
    if(error) return res.status(403).json('Token is not valid');
    const { id } = userInfo;

    const posts = await postsModel.getPosts(id);
    return res.status(200).json(posts);
  });

};

const addPost = async (req, res) => {
  const token = req.cookies.accessToken;
  const post = req.body;
  
  if(!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'secretkey', async (error) => {
    if(error) return res.status(403).json('Something went wrong!');

    const newPostId = await postsModel.addPost(post);
    return res.status(200).json({newPostId});
  });

};

module.exports = {
  getPosts,
  addPost,
};
