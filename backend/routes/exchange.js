
const express = require('express');
const router = express.Router();
const exchangeController = require('../controllers/exchangeController')
router.post("/price-exchange",exchangeController.post_priceExchange)
router.get("/price-exchange/:from/:to/:value",exchangeController.get_priceExchange)

module.exports = router; 