import express from "express";
import { signin, signup } from "../controllers/authController.js";

// init router
const router = express.Router();


router.post("/signup", signup);
router.post("/signin", signin)
 
    
export default router;      