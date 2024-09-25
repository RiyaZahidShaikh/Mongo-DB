const User = require("../Models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegistration = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name && !email && !password) {
    res.send("All fields are required");
  }
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email address");
      res.status(400).send({ message: "Invalid email address" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const existingUser = await User.findOne({ email: email })
    if(!existingUser){
        const endUser = new User(user)
        await endUser.save();
        res.send(endUser);
    }
    res.send({message: "Email address already"})

    // const payload = {
    //     user{
    //         name: user.name,
    //     email: user.email,
    //     password: user.password
    //     }
    // }

    const token = jwt.sign({email: user.email}, process.env.JWT_SECRET)
    res.send({token})
    
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send("Error!!!");
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.send("All fields are required");
  }
  const existingUser = await User.findOne({ email: email })

}

const getUser = async (req, res) => {
  const viewUser = await User.find();

  if (!viewUser) {
    res.send("User not found");
  }
  res.send(viewUser);
};

const createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;
  const updatedUser = await User.findByIdAndUpdate(userId, updateData); //, { new: true, runValidators: true }

  if (!updatedUser) {
    return res.status(404).send("User not present");
  }
  res.send("User has been updated");
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    return res.send("User not present");
  }
  res.send("User deleted");
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userRegistration,
  userLogin,
};
