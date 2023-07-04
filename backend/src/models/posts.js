const connection = require('./connection');
const camelize = require('camelize');

const getPosts = async (id) => {
  const query = `SELECT post.*, users.user_name, users.user_profilePic FROM post 
  INNER JOIN users ON users.user_id = post.user_id 
  LEFT JOIN relationships ON relationships.followedUser_id = post.user_id WHERE relationships.followerUser_id = ? OR post.user_id = ?
  ORDER BY post.created_at DESC`;

  const [posts] = await connection.execute(query, [id, id]);

  return camelize(posts);
};

const addPost = async (post) => {
  const { postDesc, postImg, userId } = post;

  const query = 'INSERT INTO post(post_desc, post_img, user_id, created_at) VALUES (?, ?, ?, NOW())';

  const [{insertId}] = await connection.execute(query, [postDesc, postImg, userId]);

  return insertId;
};

module.exports = {
  getPosts,
  addPost
};