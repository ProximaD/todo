const router = require('express').Router();
const auth = require('../middleware/auth');
const { create, list, getOne, update, remove, toggle, validateCreate } = require('../controllers/task.controller');

router.use(auth);
router.get('/', list);
router.post('/', validateCreate, create);
router.get('/:id', getOne);
router.patch('/:id', update);
router.patch('/:id/toggle', toggle);
router.delete('/:id', remove);

module.exports = router;