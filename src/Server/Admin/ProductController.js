const ProductSchema = require("./ProductSchema");

const AddProduct = (req, res) => {
  console.log(req.body);
  let product = new ProductSchema({

    Pname: req.body.Pname,
    Pid: req.body.Pid,
    Pdescription: req.body.Pdescription,
    Price: req.body.Price,
    Pimage: req.file,
  });

  product.save()
  .then((response)=>{
    res.json({
        status: 200,
        message: "Product successfully added",
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
};

module.exports = {AddProduct}
