// Modules
const { Router } = require('express');
const router = Router();

/* Controllers */
const { onLogin } = require('../controllers/login.controller');
/* Controllers */

/* Routes */

// @route POST api/items
// @desc Create an item
// @access Public
router.get('/api/login', onLogin);


/* Routes */

module.exports = router;