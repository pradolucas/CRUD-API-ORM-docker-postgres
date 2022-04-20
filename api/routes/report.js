var express = require('express');
var router = express.Router();
const controller = require('../controller/report.js');

router.route('/reports')
  .get(controller.read)
  .post(controller.insert)
  .put(controller.update)
  .delete(controller.del)

router.get('/reports/:id', controller.read_id)
router.post('/reports/:id/trails', controller.associatedTrail)


module.exports = router;
