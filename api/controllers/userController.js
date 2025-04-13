import User from "../models/userModel.js";

export const getAllUsers = async (req, res) =>{

    try {
        const users = await User.find({});
        return res.status(200).json({users, message : "All Users"});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }

}