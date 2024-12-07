const User = require('../models/mongodb/userModel');

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    return await User.findById(userId).populate('savedTools');
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

const getUserByUsername = async (username) => {
  try {
    return await User.findOne({ username }).populate('savedTools');
  } catch (error) {
    console.error('Error fetching user by username:', error);
    throw error;
  }
};

const saveToolToUser = async (userId, toolId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.savedTools.push(toolId);
    return await user.save();
  } catch (error) {
    console.error('Error saving tool to user:', error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  saveToolToUser,
};
