var express = require('express');
var router = express.Router();
const controller = require('../controller/user.js');

router.route('/users')
  .get(controller.read)
  .post(controller.insert)
  .put(controller.update)
  .delete(controller.del)

router.get('/users/:id', controller.read_id)
router.post('/users/:id/trails', controller.associatedTrails)
router.post('/users/:id/comments', controller.associatedComments)
router.post('/users/:id/favorites', controller.associatedFavorites)
router.post('/users/:id/like', controller.likeTrail)
router.post('/users/:id/dislike', controller.dislikeTrail)

module.exports = router;
