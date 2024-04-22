const mongoose = require("mongoose");
const ProductSchema = require("../Admin/ProductSchema")

const cartschema = mongoose.Schema({
  Userid: String,
  productid: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
});

module.exports = mongoose.model("cart", cartschema);


