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

// GET ALL PRODUCT
router.get("/products", async (req, res) => {
  const newQ = req.query.new;
  const categoryQ = req.query.category;
  let product;
  if (categoryQ) {
    product = await Product.find({
      category: { $in: [categoryQ] },
    });

    res.status(200).json(product);
  }

  if (newQ) {
    product = await Product.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json(product);
  }

  product = await Product.find();
  try {
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/products/:id", verifyTokenAndAdmin, async (req, res) => {
  const id = req.params.id;
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  );

  try {
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(401).json("you are not authirized");
  }
});

router.delete("/products/:id", verifyTokenAndAdmin, async (req, res) => {
  const id = req.params.id;
  const updatedProduct = await Product.findByIdAndDelete(id);

  try {
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(401).json("you are not authirized");
  }
});

module.exports = router;
