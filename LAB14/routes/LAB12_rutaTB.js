const express = require('express');
const router = express.Router();

const TBController = require('../controllers/TB_controller');

router.use('/', TBController.tombraider);

module.exports = router;