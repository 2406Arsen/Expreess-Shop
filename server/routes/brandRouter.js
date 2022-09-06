const Router = require('express');
const router = new Router();
const branController = require('../controllers/brandController');

router.post('/', branController.create);
router.get('/', branController.getAll);

module.exports = router;
