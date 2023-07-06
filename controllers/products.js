const Product = require("../models/Product");
const allProducts = require("../products.json");
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "getAllProductsStatic" });
};

const getAllProductsStatic = async (req, res) => {
  const { name, featured, company, sort } = req.query;
  const query = {};
  let sortList = "";
  if (name) query.name = { $regex: name, $options: "i" };
  if (company) query.company = company;
  if (featured) query.featured = featured;
  if (sort) sortList = sort.split(",").join(" ");
  console.log(sortList);
  const products = await Product.find(query).select("name price");
  //sort(sortList);

  res.status(200).json({ nbHits: products.length, products });
};
module.exports = { getAllProductsStatic, getAllProducts };
