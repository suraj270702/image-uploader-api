import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "Email  is already in use" });
    }

    const hashPassword = bcrypt.hashSync(req.body.password, 15);

    const newUser = new User({ ...req.body, password: hashPassword });

    await newUser.save();

    return res.status(200).json({ message: "User Created Successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const decryptedPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!decryptedPassword) {
      return res.status(400).json({ message: "Invalid Email or Password!" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    const { password, ...userInfo } = user._doc;

    return res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: "Lax", // Set SameSite attribute to None
        secure: true,
      })
      .status(200)
      .send(userInfo);
  } catch (err) {
    console.log(err);
  }
};
