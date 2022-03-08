const express = require('express');
const router = express.Router();

const COCController = require('../controllers/COC_controller');

router.use('/', COCController.callofcthulhu);

module.exports = router;