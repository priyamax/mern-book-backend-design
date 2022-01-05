var express = require('express');
var router = express.Router();
var bookModule = require('../Modules/bookmodules');
const authorize = require('../Modules/authorize');

router.get('/getbook',bookModule.get);

router.post('/addbook',authorize.isAdmin,bookModule.add);
router.delete('/deletebook',authorize.isAdmin,bookModule.delete);
module.exports =router;