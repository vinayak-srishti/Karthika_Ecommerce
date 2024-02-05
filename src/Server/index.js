const express = require("express")
const db = require("./DbConnection")
const bodyparser = require("body-parser")
const cors = require("cors")
const router = require("./Routes")

const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use("/", router)

const PORT = 4000
app.listen(PORT, ()=>{
    console.log("Server Running on port", {PORT});
})