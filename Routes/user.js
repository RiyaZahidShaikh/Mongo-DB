const express = require('express');
const router = express.Router();

const {getUser, createUser, updateUser, deleteUser} = require("../Controllers/userController");

router.get('/user', getUser);

router.post('/createuser', createUser);

router.put("/updateuser/:id", updateUser);

router.delete("/deleteuser/:id", deleteUser);

module.exports = router;