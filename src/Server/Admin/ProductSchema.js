const mongoose = require("mongoose");

const productschema = mongoose.Schema({
  Pname: { type: String, required: true },
  Pid: { type: String, required: true },
  Pdescription: { type: String, required: true },
  Price: { type: Number, required: true },
  Pimage: { type: Object, required: true },
});

module.exports = mongoose.model("products", productschema);
