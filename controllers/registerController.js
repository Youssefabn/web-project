const bcrypt = require('bcrypt');
const User = require('../models/user');

const RegisterPage = (req, res) => {
  res.render('register', { message: null });
};

const RegisterUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.render('register', { message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.render('register', { message: 'User registered successfully' });
  } catch (error) {
    res.render('register', { message: 'Registration failed' });
  }
};

module.exports = { RegisterPage, RegisterUser };
