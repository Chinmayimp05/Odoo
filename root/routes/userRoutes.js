const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

//router.get('/profile', authMiddleware, userController.getUser);


// User Authentication Routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Protected route example (requires auth middleware)
router.get('/profile', authMiddleware, userController.getUser);

module.exports = router;
