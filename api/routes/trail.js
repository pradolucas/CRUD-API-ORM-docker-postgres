var express = require('express');
var router = express.Router();
const controller = require('../controller/trail.js');

router.route('/trails')
  .get(controller.read)
  .post(controller.insert)
  .put(controller.update)
  .delete(controller.del)

router.get('/trails/:id', controller.read_id)
router.post('/trails/:id/videos', controller.associatedVideos)

module.exports = router;
