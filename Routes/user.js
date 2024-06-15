const express = require('express');
const router = express.Router();

const {getUser, createUser} = require("../Controllers/userController");

router.get('/user', getUser);

router.post('/createuser', createUser);

module.exports = router;