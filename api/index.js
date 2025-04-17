import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import MongoDBConnect from "./config/MongoDBConnect.js";
import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/user.routes.js";
//import  errorHandler  from "./middleware/errorHandler.js";
  

// Load env vars
dotenv.config();
const PORT = process.env.PORT || 6060;

// Init express
const App = express();

//json parser
App.use(express.json());
App.use(express.urlencoded({extended : false}));

// route
App.use("/api/auth", authRoute);
App.use("/api/user", userRoute);
 
  
// error handler
//App.use(errorHandler)
 
// listen server
App.listen(PORT, () => {
    MongoDBConnect();
    console.log(`Server is running on ${PORT}`.bgBlue.white);
    
});    