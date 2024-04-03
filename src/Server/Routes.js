const express = require("express")
const router = express.Router()
const user = require("./Users/UserController")
const product = require("./Admin/ProductController")
const cart = require("./Cart/CartController")

router.post("/userregistration", user.UserRegistration)
router.post("/Userlogin", user.UserLogin)
router.post("/addproduct", product.upload, product.AddProduct)
router.get("/viewproducts", product.ViewProducts )
router.post("/shoppingcart", cart.AddToCart )
router.get("/getcartlist/:Userid", cart.findCartProduct)


module.exports= router