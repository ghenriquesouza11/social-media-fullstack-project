const connection = require('./connection');

const checkUser = async (username) => {
  const query = 'SELECT * FROM users WHERE user_nickname = ?';
  const [user] = await connection.execute(query, [username]);
  return user;
};

module.exports = {
  checkUser
};