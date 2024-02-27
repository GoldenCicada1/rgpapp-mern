import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js'; // Import errorHandler from utils

export const test = (req, res) => {
    res.json({ 
        message: 'Hello Word!'
    });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can only update your own account!")); // Added curly braces for better readability
    }
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set:{
                username: req.body.username,
                email: req.body.email,
                role: req.body.role,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true });

        const { password, ...rest } = updateUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};


export const deleteUser = async (req, res, next) =>{
if(req.user.id !== req.params.id) return next(errorHandler(401,'You can only Delete your Own account'))
try {
   await  User.findByIdAndDelete(req.params.id)
   res.clearCookie('access_token');
   res.status(200).json('User has Been Deleted!')
   
} catch (error) {
   next(error) 
}
};