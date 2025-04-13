import User from "../models/userModel.js"
import bcrypt from "bcryptjs" 

 /**
   * @description User Registration
   * @access Public
   * @route api/v1/auth/registration
   * @method POST
   */

  export const signup = async (req, res) =>{
    
    const {username, email, password} = req.body;

    // validation
    if(!username || !email || !password || username === "" || email === "" || password === ""){
      return res.status(400).json({ message : "All fields are required"})
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
      return res.status(500).json({message : error.message})
    }

   }    