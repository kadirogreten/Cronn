const express = require("express");
const router = express.Router();

const CurrencyController = require("../controller/currencyController");
const currencyController = new CurrencyController();

router.get(
    "/get-currency",
    currencyController.getLastCurrencies
);


module.exports = router;