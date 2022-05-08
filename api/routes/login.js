var express = require('express');
var router = express.Router();

const controller = require('../controller/login.js');

router.route('/login')
  .post(controller.authenticate)

module.exports = router;
