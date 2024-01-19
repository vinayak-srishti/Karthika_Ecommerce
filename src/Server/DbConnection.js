
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/mindfulmenu", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connection successful");
});

module.exports = db;






// const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/mindfulmenu")

// var db = mongoose.connection
// db.on("error", console.error.bind("error"))
// db.once("open", function(){
//     console.log("Connection successful");
// })

// module.exports= db

