import express from "express";
import dotenv from "dotenv";
import colors from "colors";


// Load env vars
dotenv.config();
const PORT = process.env.PORT || 6060;

// Init express
const App = express();


// listen server
App.listen((PORT) => {
    console.log(`Server is running on ${PORT}`.bgBlue.white);
     
})