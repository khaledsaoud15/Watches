const mongoose = require("mongoose");
const { Schema } = mongoose;

const productModel = new Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: Array,
    },
    color: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productModel);
