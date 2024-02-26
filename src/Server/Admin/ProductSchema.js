const mongoose = require("mongoose");

const productschema = mongoose.Schema({
  Pname: String,
  Pid: String, 
  Pdescription: String, 
  Price: Number, 
  Pimage: String,
});

module.exports = mongoose.model("products", productschema);
