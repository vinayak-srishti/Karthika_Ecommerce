const express = require("express")
const userschema = require("./UserSchema")
const UserSchema = require("./UserSchema")

const UserRegistration=(req, res)=>{
// console.log(req.body);
// res.send("hello there !")

let user = new userschema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmpwd: req.body.confirmpwd,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode

})
user.save()
.then((response)=>{
res.json({
    status:200,
    message: "Registration Successful",
    data: response
})
})
.catch((err)=>{
console.log(err);
res.json({
    status:500,
    message: "Error"
})
})
}

const UserLogin = (req, res)=>{
const {email, password } = req.body
const userlogin = UserSchema.findOne({email: email})
if(userlogin.password==password){
    res.json({
        status:200,
        message: "Login Successful",
        data: response
    })
}
else{
    res.json({
        status:500,
        message: "Error"
    })
}

console.log(userlogin);
// if(userlogin)
}

module.exports = {UserRegistration, UserLogin}