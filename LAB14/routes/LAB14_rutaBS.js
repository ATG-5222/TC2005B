const express = require('express');
const router = express.Router();

const BSController = require('../controllers/BS_controller');

router.get('/nuevo', BSController.nuevo_get);
router.post('/nuevo', BSController.nuevo_post);
router.use('/', BSController.principal);

module.exports = router;