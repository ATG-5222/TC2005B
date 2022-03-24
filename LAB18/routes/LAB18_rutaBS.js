const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const BSController = require('../controllers/BS_controller');

router.get('/nuevo', isAuth ,BSController.nuevo_get);
router.post('/nuevo', BSController.nuevo_post);
router.use('/',isAuth,BSController.principal);

module.exports = router;