const mongoose = require("mongoose");

const cartschema = mongoose.Schema({
  Pname: String,
  Pid: Number,
  Pdescription: String,
  Price: Number,
  Productid: String,
  Userid : String
});

module.exports = mongoose.model("cart", cartschema);
