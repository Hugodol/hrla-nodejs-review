const router = require('express').Router();
const myMemesCtrl = require('./myMemesCtrl');

router.get('/mymemes', myMemesCtrl.fetch);
router.post('/mymemes', myMemesCtrl.create);

module.exports = router;
