const router = require('express').Router();
const userRouter = require('./userRouter');

router.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});
router.use(userRouter);

module.exports = router;
