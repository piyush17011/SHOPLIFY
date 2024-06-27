
const mongoose = require('mongoose');
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://admin:admin@mern.ih8ywrj.mongodb.net/?retryWrites=true&w=majority&appName=MERN');
  
//   console.log("connected");
//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

const connection= async() =>{
    try{
        const connection  = await mongoose.connect('mongodb+srv://admin:admin@mern.ih8ywrj.mongodb.net/shoplify?retryWrites=true&w=majority&appName=MERN');
    }       
    catch(err){
        console.log(err);
    }
}
module.exports = connection;