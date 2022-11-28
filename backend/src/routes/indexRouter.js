const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);

router.post('/register', AuthController.register);

module.exports = router;
