const bcrypt = require('bcrypt');
const User = require('../models/User');

const AuthController = {
  register: async (req, res) => {
    let { name, username, email, password, confirmPassword } = req.body;

    if (password != confirmPassword) {
      return res.json({
        message: 'Password dan password Confirm tida cocok!',
      });
    }

    password = bcrypt.hashSync(password, bcrypt.genSaltSync());

    try {
      await User.create({ name, username, email, password });
    } catch (error) {
      console.log(`Error on created user - ${error}`);
    }

    res.json({
      success: true,
      message: 'User berhasil ditambahkan!',
      user: { name, username, email, password },
    });
  },
};

module.exports = AuthController;
