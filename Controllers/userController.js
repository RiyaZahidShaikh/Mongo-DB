const User = require("../Models/user")

const getUser = async(req, res) => {
    const viewUser = await User.find()

    if(!viewUser){
        res.send("User not found")
    }
    res.send(viewUser)
}

const createUser = async(req, res) => {
    const user = new User(req.body)
    await user.save()
    res.send(user)
}

const updateUser = async(req, res) => {
        const userId = req.params.id;
        const updateData = req.body; 
        const updatedUser = await User.findByIdAndUpdate(userId, updateData); //, { new: true, runValidators: true }

        if (!updatedUser) {
            return res.status(404).send("User not present");
        }
    res.send("User has been updated");
}

const deleteUser = async(req, res) => {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
        return res.send("User not present");
    }
    res.send("User deleted");
}

module.exports = {getUser, createUser, updateUser, deleteUser};