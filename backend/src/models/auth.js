const connection = require('./connection');

const createUser = async (userInfo) => {
  const {userNickName, userEmail, hashedPassword, userName} = userInfo;
  const query = 'INSERT INTO users (user_nickname, user_email, user_password, user_name) VALUES (?, ?, ?, ?)';
  await connection.execute(query, [userNickName, userEmail, hashedPassword, userName]);
};

module.exports = {
  createUser
};
