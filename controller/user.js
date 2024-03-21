require('dotenv').config();
const jwt = require('jsonwebtoken');

const db = require("../util/db");

const JWT_KEY = process.env.JWT_KEY;

const loginHandler = async(req,res,next)=>{
  try {
    const {email, password} = req.body;
    const usersref = db.collection('users');
    
    let currentUser = await usersref.where('email', '==', email).get();
    if(currentUser.empty){
      const error = new Error("Email has not been registered");
      error.status = 400;
      throw error;
    }
    const userData = currentUser.docs[0].data();

    if(password != userData.password){
      const error = new Error("Wrong password!");
      error.status = 400;
      throw error;
    }

    const tokenPayload = {
      username: userData.username,
      userId: currentUser.docs[0].id
    }

    const token = jwt.sign(tokenPayload, JWT_KEY, {expiresIn: "1y"});

    res.json({
      message: "Login Success!",
      token
    })

  } catch (error) {
    res.status(error.status || 500).json({
      status: "Error",
      message: error.message
    })
  }
}

module.exports = {loginHandler}