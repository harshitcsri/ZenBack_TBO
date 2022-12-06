const express = require('express');
const connection = require('../db');
require('dotenv').config();
const router = express.Router();
const inventoryController = require('../controllers/inventoryController'); 
router.post('/orderDetails',inventoryController.orderDetails);


module.exports = router;