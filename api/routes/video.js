var express = require('express');
var router = express.Router();
const controller = require('../controller/video.js');

router.route('/videos')
  .get(controller.read)
  .post(controller.insert)
  .put(controller.update)
  .delete(controller.del)

router.get('/videos/:id', controller.read_id)
router.post('/videos/:id/trails', controller.associatedTrails)

module.exports = router;
