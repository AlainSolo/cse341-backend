const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createInfo);

router.put('/:id', contactsController.updateInfo);

router.delete('/:id', contactsController.deleteInfo);
module.exports = router;
