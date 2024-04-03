const CartSchema = require("./CartSchema");

const AddToCart = (req, res) => {
  let cart = new CartSchema({
    Pname: req.body.Pname,
    Pid: req.body.id,
    Pdescription: req.body.Pdescription,
    Price: req.body.Price,
    Productid: req.body.Productid,
    Userid : req.body.Userid
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
};

const findCartProduct=((req,res)=>{
  console.log(req.params.Userid, "Userid");
  const Userid = req.params.Userid
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
})

module.exports = { AddToCart, findCartProduct };
