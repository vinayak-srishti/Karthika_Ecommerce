const mongoose= require("mongoose")

const cartschema = mongoose.Schema({
    product : Object
})

module.exports = mongoose.model("cart", cartschema)