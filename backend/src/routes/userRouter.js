const userRouter = require('express').Router();

userRouter.get('/users', (req, res) => {
  res.json({ success: true, message: 'hello users', data: [] });
});

module.exports = userRouter;
