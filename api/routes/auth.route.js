import express from "express";
import { signup } from "../controllers/authController.js";

// init router
const router = express.Router();


router.post("/signup", signup);
 
    
export default router;      