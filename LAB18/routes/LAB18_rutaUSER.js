const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/USER_controller');

router.get('/login', user_controller.get_login);
router.post('/login', user_controller.login);
router.get('/logout', user_controller.logout);
router.get('/', user_controller.root);

module.exports = router;