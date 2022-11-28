const jwt = require('jsonwebtoken');
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

    res.status(201).json({
      success: true,
      message: 'User berhasil ditambahkan!',
      user: { name, username, email, password },
    });
  },

  login: async (req, res) => {
    let { username, password } = req.body;

    const user = await User.findOne({
      attributes: ['id', 'name', 'username', 'email', 'password'],
      where: { username },
    });

    isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Username atau password salah',
      });
    }

    const accessToken = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.APP_ACCESS_TOKEN_SECRET,
      {
        expiresIn: '20s',
      }
    );

    const refreshToken = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.APP_ACCESS_TOKEN_SECRET,
      {
        expiresIn: '1d',
      }
    );

    await User.update({ refreshToken }, { where: { id: user.id } });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000,
    });

    res.json({ success: true, token: accessToken });
  },
};

module.exports = AuthController;
