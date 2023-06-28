const usersModels = require('../models/user');
const authModels = require('../models/auth');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const {userNickName, userEmail, userPassword, userName } = req.body;

  // confere se um usuário já existe
  const allUsers = await usersModels.checkUser(userNickName);
  if(allUsers.length) {
    return res.status(409).json('User already exists!');
  }

  // cria um novo usuário
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(userPassword, salt);
  const userInfo = {userNickName, userEmail, hashedPassword, userName};
  await authModels.createUser(userInfo);
  return res.status(200).json('User has been created.');
};

module.exports = {
  register
};
