const express = require("express")

const UserRegistration=(req, res)=>{
console.log(req.body);
res.send("hello there !")
}

module.exports = {UserRegistration}