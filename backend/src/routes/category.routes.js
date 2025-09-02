const router = require('express').Router();
const auth = require('../middleware/auth');
const { create, list, update, remove, validateCreate } = require('../controllers/category.controller');

router.use(auth);
router.get('/', list);
router.post('/', validateCreate, create);
router.patch('/:id', update);
router.delete('/:id', remove);

module.exports = router;