var express = require('express');
var router = express.Router();

const controller = require('../controller/comment.js');

router.route('/comments')
  .get(controller.read)
  .post(controller.insert)
  .put(controller.update)
  .delete(controller.del)

router.get('/comments/:id', controller.read_id)

module.exports = router;
