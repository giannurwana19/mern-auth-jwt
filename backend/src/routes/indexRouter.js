const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

router.get('/users', verifyToken, UserController.index);
router.get('/users/:id', UserController.show);

router.get('/verify-token', (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.split(' ')[1];

  if (!accessToken) {
    return res.status(401).json({ success: false, message: 'Unauthorized!' });
  }

  jwt.verify(
    accessToken,
    process.env.APP_ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, message: 'Forbidden' });
      }

      req.username = decoded.username;
      next();
    }
  );
});

router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);

module.exports = router;
