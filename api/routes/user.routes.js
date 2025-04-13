import express from "express";
import { getAllUsers } from "../controllers/userController.js";

// router
const router = express.Router();


// router
router.get("/getalluserr", getAllUsers);


// export router
export default router;