const Router = require('express');
const controller = require('../controller/recordController');

const router = new Router();

router.get('/records', controller.getRecords);
router.post('/records', controller.createRecord);
router.put('/records', controller.update);
router.delete('/records/:id', controller.delete);

module.exports = router;