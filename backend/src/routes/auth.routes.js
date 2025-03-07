const express = require('express');
// Controller for auth


const router = express.Router();

router.post("/auth", AuthController.login)
router.post("/auth/forgot-password", AuthController.forgot_password)
router.post("/auth/refresh-token", AuthController.refresh_token)

module.exports = router