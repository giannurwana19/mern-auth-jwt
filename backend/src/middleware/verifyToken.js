const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.split(' ')[1];

  console.log('token :', accessToken);

  if (!accessToken) {
    return res.status(401).json({ success: false, message: 'Unauthorized!' });
  }

  jwt.verify(
    accessToken,
    process.env.APP_ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ success: false, message: err + 'gagal euy' });
      }

      req.username = decoded.username;
      next();
    }
  );
};

module.exports = verifyToken;
