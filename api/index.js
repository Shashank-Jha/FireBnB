const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'randomstring209842aasmdknjsoanjc';

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.use(express.json()); // to handle json from post req

app.get("/test", (req, res) => {
  res.json("test ok");
});

try{
  app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  });
}
catch (e){
  res.status(422).json(e);
}

  app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if(userDoc){
      const passwordOk = bcrypt.compareSync(password,userDoc.password);
      if(passwordOk){
        jwt.sign({email:userDoc.email, id:userDoc._id},jwtSecret,{},(err,token)=>{
          if(err) throw err;
          res.cookie('token',token).json('correct pass!');
        })
      }else{
        res.status(422).json("wrong pass!");
      }
    }else{
      res.json("error 404 : not found!");
    }
  });

app.listen(4000);

//T0lD6g7YFJAe61ae
