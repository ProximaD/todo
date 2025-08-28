const router = require('express').Router();
const auth = require('../middleware/auth');
const { signup, login, me, validateSignUp, validateLogin } = require('../controllers/auth.controller');

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);
router.get('/me', auth, me);

module.exports = router;