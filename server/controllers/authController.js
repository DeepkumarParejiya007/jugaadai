const authService = require('../services/authService');

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await authService.registerUser(username, email, password);
    res.status(201).json({ message: 'User registered successfully', user: newUser, success: true });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message, success: false});
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.authenticateUser(email, password);
    res.status(200).json({
      message: 'Sign In successfully',
      success: true,
      token,
      email: user.email,
      username: user.username,
    });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed', error: error.message, success: false });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie('t');
  res.status(200).json({ message: 'User signed out successfully', success: true });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
