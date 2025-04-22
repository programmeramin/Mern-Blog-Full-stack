import errorHandler from "../middleware/errorHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
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


   /**
    * @description User login
    * @access public
    * @route api/auth/login
    * @method POST
    */

   export const signin = async (req, res, next) =>{

    const {email, password} = req.body;

    // validation
    if(!email || !password || email === "" || password === ""){
     return next(errorHandler(400, 'All fields are required'));
    }

    try {
      
      const validUser = await User.findOne(({email}));
      if(!validUser){
       return next(errorHandler(400, "User not found"))
      }

      const validPass = bcrypt.compareSync(password, validUser.password);

      if(!validPass){
        return next(errorHandler(400, "Invalid Password"))
      }

      const token = jwt.sign(
        {id : validUser._id},
        process.env.JWT_SECRET,);

        const {password : pass, ...rest} = validUser._doc;

        res.status(200).cookie("access_token", token,{
          httpOnly : true,
          expires : new Date(Date.now() + 7 * 24 * 60 * 60 *  1000)
        }).json(rest)
    

    } catch (error) {
      
    }

   }


     /**
    * @description User google auth login
    * @access public
    * @route api/auth/google
    * @method POST
    */

     export const google = async (req, res, next) =>{

      const {name, email, googlePhotoUrl} = req.body;

      try {
        const user = await User.findOne({email});
        if(user){
          const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);
          const {password, ...rest} = user._doc;
          res.status(200).cookie("access_token", token, {
            httpOnly : true,
            
          }).json(rest)
        }else{
          const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

          const hashedPassword = bcrypt.hashSync(generatePassword, 10);


          const newUser = new User({
            username : name.toLoweCase().replace().split(" ").join("") + Math.random().toString(9).slice(-4),
            email,
            password : hashedPassword,
            profilePicture : googlePhotoUrl,
          });

          await  newUser.save();
          const token = jwt.sign({id : newUser._id}, process.env.JWT_SECRET);
          const {password, ...rest} = newUser._doc;

          res.status(200).cookie("access_token", token, {
            httpOnly : true,
            expires : new Date(Date.now() + 7 * 24 * 24 * 60 * 1000)
          }).json(rest);
        };


      } catch (error) {
        
      }


     }