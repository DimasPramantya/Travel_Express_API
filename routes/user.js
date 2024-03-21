const express = require('express');
const { loginHandler, testHandler } = require('../controller/user');

const userRouter = express.Router();

userRouter.get('/', testHandler)

userRouter.post('/login', loginHandler);

module.exports = userRouter;