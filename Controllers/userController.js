const User = require("../Models/user")

const getUser = async(req, res) => {
    const user = await User.find()

    if(!user){
        res.send("User not found")
    }
    res.send(user)
}

const createUser = async(req, res) => {
    const user = new User(req.body)
    await user.save()
    res.send(user)
}

module.exports = {getUser, createUser};