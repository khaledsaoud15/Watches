const router = require("express").Router();
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");

//POST PRODUCT

router.post("/product", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();

  try {
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
