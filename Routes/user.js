const express = require('express');
const router = express.Router();

const {getUser, createUser, updateUser, deleteUser, userRegistration, userLogin} = require("../Controllers/userController");

router.post('/userreg', userRegistration);

router.post('/userlogin', userLogin);

router.get('/user', getUser);

router.post('/createuser', createUser);

router.put("/updateuser/:id", updateUser);

router.delete("/deleteuser/:id", deleteUser);

module.exports = router;