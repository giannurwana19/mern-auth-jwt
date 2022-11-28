const AuthController = require('../controllers/AuthController');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

router.get('/users', (req, res) => {
  res.json({ success: true, message: 'hello users', data: [] });
});

router.post('/register', AuthController.register);

module.exports = router;
