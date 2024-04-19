const mongoose = require("mongoose");

const cartschema = mongoose.Schema({
  Userid: String,
  productid: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
});

module.exports = mongoose.model("cart", cartschema);
