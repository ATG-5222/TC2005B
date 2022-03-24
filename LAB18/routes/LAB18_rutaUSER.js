const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const user_controller = require('../controllers/USER_controller');

router.get('/login', user_controller.get_login);
router.post('/login', user_controller.login);
router.get('/logout', user_controller.logout);
router.get('/signup', isAuth , user_controller.get_signup);
router.post('/signup', user_controller.post_signup);
router.get('/', isAuth, user_controller.root);

module.exports = router;