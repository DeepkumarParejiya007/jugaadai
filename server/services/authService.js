const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/mongodb/userModel');

require('dotenv').config();

const secretKey = process.env.JWT_SECRET; 

const registerUser = async (username, email, password) => {


  const checkEmail = await User.findOne({email});
  const checkUsername = await User.findOne({username});
  if(checkEmail || checkUsername){
    throw new Error('User already exist, you can login');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log('Input password:', password);
  console.log('Hashed password:', hashedPassword);

  const user = new User({
    username,
    password: hashedPassword,
    email,
  });

  return await user.save();
};

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ id: user._id, email: user.email }, secretKey, {
    expiresIn: '1h'
  });

  return { token, user };
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  registerUser,
  authenticateUser,
  verifyToken,
};
