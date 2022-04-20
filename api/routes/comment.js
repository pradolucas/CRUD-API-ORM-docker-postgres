var express = require('express');
var router = express.Router();

const controller = require('../controller/comment.js');

router.route('/comments')
  .get(controller.read)
  .post(controller.insert)
  .put(controller.update)
  .delete(controller.del)

router.get('/comments/:id', controller.read_id)
router.post('/comments/:id/trails', controller.associatedTrail)
router.post('/comments/:id/users', controller.associatedUser)

module.exports = router;
