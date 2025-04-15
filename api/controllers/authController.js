import errorHandler from "../middleware/errorHandler.js";
import User from "../models/userModel.js"
import bcrypt from "bcryptjs" 

 /**
   * @description User Registration
   * @access Public
   * @route api/v1/auth/registration
   * @method POST
   */

  export const signup = async (req, res, next) =>{
    
    const {username, email, password} = req.body;

    // validation
    if(!username || !email || !password || username === "" || email === "" || password === ""){
     next(errorHandler(400, "All fields are required"));
    }

    // check if user already exists
    const existUser = await User.findOne({email});
    if(existUser){
      return res.status(400).json({message : "User already exists"})
    }

    // hash password
    const hassPassword =  bcrypt.hashSync(password, 10);

    // create user
    const newUser = new User({
      username,
      email,
      password : hassPassword,
    });

    try {
      await newUser.save();
      return res.status(201).json({message : "User create successfully"})
    } catch (error) {
      next(error)
    }

   }     