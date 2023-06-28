const usersModels = require('../models/user');
const authModels = require('../models/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const login = async (req, res) => {
  const {userNickName, userPassword} = req.body;
  const allUsers = await usersModels.checkUser(userNickName);
  if(allUsers.length === 0) {
    return res.status(404).json('User not found!');
  }
  const user = await usersModels.getUser(userNickName);
  const {user_password, ...others} = user[0];

  const checkPassword = bcrypt.compareSync(userPassword, user_password);

  if(!checkPassword) {

    res.status(400).json('Wrong password or username!');
  }
  const token = jwt.sign({id:user[0].user_id}, 'secretkey');

  res.cookie('accessToken', token, {httpOnly: true}).status(200).json(others);
};

const logout = (_req, res) => {
  res.clearCookie('accessToken', {
    secure:true,
    sameSite:'none'
  }).status(200).json('User has been logged out.');
};

module.exports = {
  register,
  login,
  logout
};
