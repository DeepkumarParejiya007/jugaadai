const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

const saveToolToUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { toolId } = req.body;
    const updatedUser = await userService.saveToolToUser(userId, toolId);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error saving tool to user', error });
  }
};

module.exports = {
  createUser,
  getUserById,
  saveToolToUser,
};
