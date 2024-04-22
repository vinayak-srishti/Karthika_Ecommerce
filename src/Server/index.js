const express = require("express")
const db = require("./DbConnection")
const path = require("path")
const bodyparser = require("body-parser")

const multer = require("multer")

const cors = require("cors")
const app = express()
app.use("/upload", express.static(path.join(__dirname, "upload")))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(cors())

const router = require("./Routes")
app.use("/", router)


const PORT = 4000
app.listen(PORT, ()=>{
    console.log("Server Running on port", {PORT});
})
