const ProductSchema = require("./ProductSchema");
const CartSchema = require("../Cart/CartSchema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("Pimage");

const AddProduct = async (req, res) => {
  let Pimage = req.file;
  let product = new ProductSchema({
    Pname: req.body.Pname,
    Pid: req.body.Pid,
    Pdescription: req.body.Pdescription,
    Price: req.body.Price,
    Pimage: req.file,
  });
  await product
    .save()
    .then((response) => {
      res.json({
        status: 200,
        message: "Product successfully added",
        data: response,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        message: "Error",
      });
    });
};

const ViewProducts = (req, res) => {
  ProductSchema.find()
    .exec()
    .then((data) => {
      res.json({
        msg: "Product Details",
        values: data,
      });
    })
    .catch((data) => {
      res.json({
        msg: "Error finding Product",
      });
    });
};

module.exports = { AddProduct, upload, ViewProducts };
