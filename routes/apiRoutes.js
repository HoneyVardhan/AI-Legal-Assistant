const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.home);
router.get('/google-api', apiController.googleAPI);

module.exports = router;
