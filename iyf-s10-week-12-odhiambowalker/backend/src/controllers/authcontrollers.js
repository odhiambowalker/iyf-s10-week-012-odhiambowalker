import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already used" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashed });

    const { password: _, ...safeUser } = user.toObject();
    res.json({ user: safeUser, token: generateToken(user._id) });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    const { password: _, ...safeUser } = user.toObject();
    res.json({ user: safeUser, token: generateToken(user._id) });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getMe = async (req, res) => {
  res.json(req.user);
};