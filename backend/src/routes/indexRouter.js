const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

const verifyToken = require('../middleware/verifyToken');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

router.get('/users', verifyToken, UserController.index);
router.get('/users/:id', UserController.show);

router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/refresh-token', AuthController.refreshToken);

module.exports = router;
