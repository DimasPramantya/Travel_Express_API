const express = require('express');
const { loginHandler } = require('../controller/user');

const userRouter = express.Router();

userRouter.post('/login', loginHandler);

module.exports = userRouter;