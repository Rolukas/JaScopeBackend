// Modules
const { Router } = require('express');
const router = Router();

/* Controllers */
const { onLogin } = require('../controllers/login.controller');
const { onCreateUser, onUpdateUser, onDeleteUser } = require('../controllers/user.controller');

/* Controllers */

/* Routes */

// @route POST api/items
// @desc Create an item
// @access Public
router.get('/api/login', onLogin);
router.post('/api/User', onCreateUser);
router.put('/api/User', onUpdateUser);
router.delete('/api/User', onDeleteUser);


/* Routes */

module.exports = router;