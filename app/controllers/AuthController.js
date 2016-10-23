const UserDAO = require()
const createToken = require('../utils/createToken');
const bcrypt = require('bcrypt');

class AuthController {
  static login(req, res) {
    const { email, password } = req.body;
    UserDAO.findUser({ email })
           .then((user) => {
             if (!bcrypt.compareSync(password, user.password)) {
               res.status(401).end();
             }
           })
  }
}
