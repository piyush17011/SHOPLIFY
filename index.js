const express = require('express');
const connect = require('./dbConnection');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express();  //creates a server
connect();

var corsOptions = {
    origin: 'http://localhost:3000/',
    methods: 'GET,POST,PUT,DELETE,PATCH,HEAD',
    credentials : true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

//APIs : middleware(use)
app.use(cors())

app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
// app.get("/new",(req,res)=>{
//     res.send("New- GET");  
//         //display hi on port 5000
//     // res.sendFile(index.html);
// })

app.listen(PORT,()=>{
    console.log("Server is running...")
});

