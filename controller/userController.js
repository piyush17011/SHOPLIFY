
const User = require('../model/userModel');
const { use } = require('../routes/userRoutes');

const registerUser = async(req,res)=>{
    try{
        const{ username , email, password } = req.body;
    // console.log("test->",email,password,role);
    const existingUser = await User.findOne ({ email });
    if(existingUser){
        console.log("Exists");
        res.json({
            message: "Exists",
          });
    }
    else{
        const user = await User.create ({
            username,
            email,
            password,
            
        });
        console.log(user)
        await user.save()
        res.send(user);
    }

    }
    catch(err){
        console.log(err);
    }
    
    
}
const loginUser = async(req,res)=>{
    // console.log(req);
                                        //to check errors
    // const {email,password} =req.body;
    // const user = await User.findOne({          //find One,findMany
    //     email,
    //     password        
    // }) 
    // console.log("User Found",user)
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.json({
        _id: user._id,
        email: user.email,
        message: "Success",
      });
    } 
    else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  }
   catch(err){
    res.status(500).json({ message: error.message }); 
   }

           
}

const getUsers = async(req,res)=>{
                                             //to check errors
        try{
            const user = await User.find({});
            res.status(200).json({user});
        }
        catch(err){
            console.log(err);
        }      
}
   
module.exports = {registerUser,loginUser,getUsers};  //use curly brackets to export more than one var,fn
 










































