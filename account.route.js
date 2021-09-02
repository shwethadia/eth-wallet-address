const express = require('express');
const router = express.Router();


const account_controller = require('./account.controller');
router.post('/newAccount',account_controller.new_account);
module.exports = router;


