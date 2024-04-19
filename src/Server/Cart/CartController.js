const CartSchema = require("./CartSchema");

const AddToCart = async (req, res) => {
  let data = await CartSchema.find({
    Userid: req.body.Userid,
    productid: req.body.productid,
  });

  console.log(data, "Data ");
  if (!data.length > 0) {
    let cart = await new CartSchema({
      Userid: req.body.Userid,
      productid: req.body.productid,
    });
  

  
  cart
    .save()
    .then((response) => {
      res.json({
        status: 200,
        data: response,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "Error Adding Product to Cart",
      });
    });
} else{
  res.json({
    status: 400,
    message : "Already in Cart"
  })
}}

const findCartProduct = (req, res) => {
  console.log(req.params.Userid, "Userid");
  const Userid = req.params.Userid;
  //  CartSchema.findById(Userid)
  //  .exec()
  //  .then((data)=>{
  //     res.json({
  //         msg: "Added to Cart",
  //         value: data
  //     })
  //     .catch(err=>{
  //         res.json({
  //             msg: "Error Adding Product",
  //         error: err
  //         })
  //     })
  //  })
};

module.exports = { AddToCart, findCartProduct };
