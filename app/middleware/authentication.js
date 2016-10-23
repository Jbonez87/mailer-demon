const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  console.log('It\'s authing time!');
  const { token } = req.cookies;

  const unrestrictedRoutes = ['/login', '/signup', '/signout'];

  if (unrestrictedRoutes.includes(req.path)) { return next(); }
  if (token && req.session.currentUser) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).end();
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.clearCookie('token');
    return res.status(403).end();
  }
};

module.exports = authentication;
