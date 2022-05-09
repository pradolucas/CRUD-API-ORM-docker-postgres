var express = require('express');
var router = express.Router();
const controller = require('../controller/favorite.js');

router.route('/favorites')
  .get(controller.read)
  .post(controller.insert)
  .put(controller.update)
  .delete(controller.del)

router.get('/favorites/:id', controller.read_id)
router.post('/favorites/:id/trails', controller.associatedTrails)
router.post('/favorites/:id/users', controller.associatedUsers)

module.exports = router;
