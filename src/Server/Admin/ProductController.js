const ProductSchema = require("./ProductSchema");
const multer = require('multer');
let imageName = '';

const imageStorage = multer.diskStorage({
  destination: 'images', // Destination to store image
  filename: (req, file, cb) => {
      imageName = file.fieldname + '_' + Date.now() + file.originalname;
      req.body.imageName = imageName;

      cb(null, imageName); // file.fieldname is name of the field (image) ,path.extname get the uploaded file extension
  },
});

const upload = multer({
  storage: imageStorage,
  limits: {
      fileSize: 8000000, // 1000000 Bytes = 8 MB
  },
  fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) {
          // upload only png and jpg format
          return cb(new Error('Incorrect file format !'));
      }
      cb(undefined, true);
  },
});

const uploadImage = upload.single('image');


const AddProduct = (req, res) => {
  console.log(req.body);
  let product = new ProductSchema({

    Pname: req.body.Pname,
    Pid: req.body.Pid,
    Pdescription: req.body.Pdescription,
    Price: req.body.Price,
    Pimage: req.body.imageName,
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

module.exports = {AddProduct, uploadImage}
