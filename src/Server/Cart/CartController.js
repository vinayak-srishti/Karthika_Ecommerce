const CartSchema = require("./CartSchema")


const AddToCart = (req, res)=>{
let cart = new CartSchema({
    product : req.body.id
})

cart.save()
.then((response)=>{
    res.json({
        status: 200,
        data: response
    })
})
.catch((err)=>{
    res.json({
        status: 500,
        message: "Error Adding Product to Cart"
    })
})
}

module.exports = {AddToCart}