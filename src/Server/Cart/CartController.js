const CartSchema = require("./CartSchema");

const AddToCart = async (req, res) => {
  console.log(req.params);
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
        console.log(response, "res");
        res.json({
          status: 200,
          message: "Added to Cart",
          data: response,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: "Error Adding Product to Cart",
        });
      });
  } else {
    res.json({
      status: 400,
      message: "Already in Cart",
    });
  }
};

const findCartProduct = (req, res) => {
  CartSchema.find({ Userid: req.body.Userid })
    .populate("productid")
    .then((data) => {
      if (data != null) {
        res.json({
          status: 200,
          message: "Product Found Successfully",
          data: data,
        });
      } else {
        res.json({
          status: 400,
          message: "No Product found",
        });
      }
    });
};

module.exports = { AddToCart, findCartProduct };
