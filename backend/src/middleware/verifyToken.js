const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
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
        return res.sendStatus(403);
      }

      req.username = decoded.username;
      next();
    }
  );
};

module.exports = verifyToken;
