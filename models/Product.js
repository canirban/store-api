const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Product Name cannot be empty"] },
  price: { type: Number, required: [true, "Product Price cannot be empty"] },
  featured: { type: Boolean, default: false },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});
module.exports = mongoose.model("Product", productSchema);
