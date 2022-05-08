const { scryptSync, timingSafeEqual } = require('crypto')

const model = require('../src/api')

const authenticate = (req, res) => {
  const body = req.body;
  console.log(body);
  model.Users.findOne({ where: { 'email': body.email } }
  ).then((user) => {
    const [salt, key] = user.senha.split(":");
    console.log(salt, key)
    const hashedBuffer = scryptSync(body.senha, salt, 64);
    const keyBuffer = Buffer.from(key, 'base64')
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    res.send(match)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
};

module.exports = {
  authenticate
};
