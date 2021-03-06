const UserDAO = require('../dao/UserDAO');
const createToken = require('../utils/createToken');
const bcrypt = require('bcrypt');

class AuthController {
  static login(req, res) {
    const { email, password } = req.body;
    UserDAO.findUser({ email })
           .then((user) => {
             console.log(user);
             if (!bcrypt.compareSync(password, user.password)) {
               res.status(401).end();
             } else {
               req.session.currentUser = user;
               const token = createToken(user);
               res.cookie('token', token);
               res.status(200).json(user);
             }
           })
           .catch((err) => {
             console.log(err);
             res.status(401).end();
           });
  }
  static signUp(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    console.log(email);
    let password = req.body.password;
    console.log(password);
    if (email.length > 0 && password.length > 0) {
      password = bcrypt.hashSync(password, 10);
      UserDAO.create({ name, email, password })
             .then((user) => {
               console.log(user);
               req.session.currentUser = user;
               const token = createToken(user);
               res.cookie('token', token);
               res.status(200).json(user);
             })
             .catch((err) => res.status(500).json(err));
    } else {
      res.status(400).end();
    }
  }
  static signOut(req, res) {
    req.session.currentUser = null;
    res.clearCookie('token');
    res.status(204).end();
  }
}

module.exports = AuthController;
