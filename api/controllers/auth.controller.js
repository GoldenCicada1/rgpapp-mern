import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password, phoneNumber } = req.body;
  // Hash the password before saving
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    phoneNumber,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { identifier, password } = req.body;
  try {
    // Find user by email or phoneNumber
    const validUser = await User.findOne({
      $or: [{ email: identifier }, { phoneNumber: identifier }],
    });

    // Check if user exists
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    // Compare passwords
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      console.log("Incorrect password");
      return next(errorHandler(401, "Wrong Credentials"));
    }

    // If password is correct, generate JWT token and send user data
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 7 * 1000), // Corrected Date.now() syntax and multiplied by 1000 for milliseconds
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    // Validate incoming data:
    const { email, phoneNumber, name, photo } = req.body;
    if (!email || !name || !photo) {
      return res
        .status(400)
        .json({ message: "Missing required fields: email, name, and photo" });
    }

    // Check for existing user and handle accordingly:
    let user = await User.findOne({ email });

    if (user) {
      // Existing user: generate token and send response
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 7 * 1000), // Corrected syntax and milliseconds
        })
        .status(200)
        .json(rest);
    } else {
      // New user: create securely, generate token, and send response
      const generatedPassword = await bcryptjs.genSalt(10); // Use bcryptjs.genSalt() for more secure passwords
      const hashedPassword = await bcryptjs.hash(generatedPassword, 10); // Use bcryptjs.hash()
      const username =
        name.split(" ").join("").toLowerCase() +
        Math.random().toString(36).slice(-3);

      const newUser = new User({
        username,
        email,
        phoneNumber,
        password: hashedPassword,
        avatar: photo,
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 7 * 1000), // Corrected syntax and milliseconds
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error); // Pass errors to error handler
  }
};

export const signOut = async (req, res, next) => {
  try {
    // Clear cookie and send success message
    res.clearCookie("access_token");
    res.status(200).json("User has been logged Out!");
  } catch (error) {
    next(error);
  }
};
