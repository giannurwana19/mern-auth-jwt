const User = require('../models/User');

const UserController = {
  index: async (req, res) => {
    const users = await User.findAll();

    res.json({
      success: true,
      data: users,
    });
  },

  show: async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ where: { id } });
    // const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        success: true,
        data: user,
      });
    }

    res.json({
      success: true,
      data: user,
    });
  },
};

module.exports = UserController;
