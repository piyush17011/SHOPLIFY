
const Product = require('../model/productModel');


const createProduct = async (req, res) => {
    const { title, imageURL, price, details } = req.body;
    try {
      const newProduct = new Product({ title, imageURL, price, details });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
// const loginProduct = async(req,res)=>{
//     // console.log(req);
//                                         //to check errors
//     // const {email,password} =req.body;
//     // const Product = await Product.findOne({          //find One,findMany
//     //     email,
//     //     password        
//     // }) 
//     // console.log("Product Found",Product)
//   const { email, password } = req.body;
//   try {
//     const Product = await Product.findOne({ email });
//     if (Product && Product.password === password) {
//       res.json({
//         _id: Product._id,
//         email: Product.email,
//         message: "Success",
//       });
//     } 
//     else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   }
//    catch(err){
//     res.status(500).json({ message: error.message }); 
//    }

           
// }
// Get all products
const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
   
module.exports = {createProduct,getAllProducts};  //use curly brackets to export more than one var,fn
 










































