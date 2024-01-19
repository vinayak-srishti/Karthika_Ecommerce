const express = require("express")
const router = express.Router()
const user = require("./Users/UserController")

router.post("/userregistration", user.UserRegistration)


module.exports= router