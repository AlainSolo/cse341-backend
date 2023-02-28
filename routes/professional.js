const { Router } = require('express');
const express = require('express');

const contactsController = require('../controllers/professional');
const router = express.Router();

router.get('/',professionalController.getInfo);


 

module.exports = router;