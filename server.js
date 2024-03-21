const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use('/users', userRouter);

app.use('/', (req,res,next)=>{
  res.status(404).json({
    status: 'NOT FOUND!!!',
    message: 'Resource Not Found!'
  })
})

app.listen(8080);