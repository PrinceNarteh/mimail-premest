const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  let errors = {};

  if (err.message === "incorrect username") {
    errors.username = err.message;
  } else if (err.message === "incorrect password") {
    errors.password = err.message;
  } else if (err.code === 11000) {
    errors.username = "the username is not available";
    return errors;
  } else if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  } else {
    errors.error = err.message;
  }

  return errors;
};

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const userCtrl = {};

userCtrl.signup = async function (req, res) {
  const { username, password } = req.body;

  try {
    // let user = await User.create({ username, password });
    console.log(req.body);
    // const token = generateToken(user);
    res.status(201).json({ token, user });
  } catch (error) {
    const errObj = handleErrors(error);
    res.status(400).json(errObj);
  }
};

userCtrl.login = async function (req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    console.log(user);
    const token = generateToken(user);
    res.status(200).json({ token, user });
  } catch (error) {
    const errMsg = handleErrors(error);
    res.status(400).json(errMsg);
  }
};

module.exports = userCtrl;
