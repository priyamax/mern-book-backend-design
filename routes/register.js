var express = require('express');
var router = express.Router();
var Reg = require('../Modules/registerusermodules');
var RegAdmin=require('../Modules/registerAdminmodules');

router.post('/signup', Reg.signup);
router.post('/login', Reg.login);
router.post('/Adminsignup',RegAdmin.signup);
router.post('/Adminlogin',RegAdmin.login);
module.exports = router;