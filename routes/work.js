const express = require('express');

const router = express.Router();
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');
const work = require('../controllers/work');

router.get('/fetch', middlewareController.verifyToken, work.getWorks)
router.get('/works-not-seen/fetch', middlewareController.verifyToken, work.fetchWorksNotSeen)
router.get('/search', middlewareController.verifyToken, work.searchWork)
router.post('/add', middlewareController.verifyToken, work.addWork);
router.post('/comments/own/add', middlewareController.verifyToken, work.addCommentForOwn);
module.exports = router