const express = require("express")
const router = express.Router()
const user = require("./Users/UserController")
const product = require("./Admin/ProductController")

router.post("/userregistration", user.UserRegistration)
router.post("/Userlogin", user.UserLogin)
router.post("/addproduct", product.AddProduct, product.upload)
router.post("/viewproducts", product.ViewProducts )


module.exports= router