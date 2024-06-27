const express = require('express');


const { createProduct, getAllProducts } = require('../controller/productController');

const router = express.Router();

console.log("gg")
router.post("/add",createProduct)
router.get("/get",getAllProducts)

module.exports = router;