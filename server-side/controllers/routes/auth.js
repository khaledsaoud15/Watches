const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.HASH_KEY),
  });

  const savedUser = await newUser.save();

  try {
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  !user && res.status(401).json("wrong credentials");

  const hashedPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.HASH_KEY
  );
  const hashed = hashedPassword.toString(CryptoJS.enc.Utf8);
  hashed !== req.body.password && res.status(401).json("wrong credentials");

  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_KEY
  );

  const { password, ...others } = user._doc;

  try {
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
