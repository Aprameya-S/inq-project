const AdminModel = require('../models/AdminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookies = require("cookie-parser")


module.exports.addAdmin = async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    //hash password with 10 character salt
    data.pass = await bcrypt.hash(data.pass, 10);
    AdminModel.create(
      data
    ).then ((data) => {
      console.log("New Admin Added Successfully...");
      res.status(201).send(data)
    }).catch ((err) => {
      console.log(err);
      res.status(500).send({error: err, msg: "Something went wrong..."})
    })
  } catch(err) {
    console.log(err)
    res.status(500).send({error: err, msg: "Something went wrong..."})
  }
}

module.exports.loginAdmin = async (req, res) => {
  const curUser = await AdminModel.find({username:req.body.username});

  // console.log(curUser)

  if(!curUser.length){
    return res.status(400).send('Cannot find user')
  }
  if(curUser[0].role!=="admin"){
    return res.status(400).send('You are not an admin')
  }
  try {
    // console.log(req.body.pass, curUser[0].pass);
    if(await bcrypt.compare(req.body.pass, curUser[0].pass)){
      // res.status(200).send('Success')
      const accessToken = generateAccessToken(req.body.username, 'admin');

      const cookieOptions = {
        httpOnly: true,
        path: '/api/auth',
        sameSite: "strict",
        secure: true,
      }

      res.cookie("at", accessToken, cookieOptions).json({ status: "success" });
    }
    else
      res.status(401).send('Incorrect password');
  } catch(err) {
    console.log(err)
  }
}

module.exports.logoutAdmin = async(req,res) => {
  res.cookie("at",null,{
    httpOnly: true,
    path: '/api/auth',
    sameSite: "strict",
    secure: true,
  }).json({ status: "success" });
}

module.exports.authAdminToken = (req, res, next) => {
  const token = req.cookies.at

  if(token == null)
    return res.status(401).send('Not allowed');

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // console.log(user)
    if(err)
      return res.status(403).send('Not allowed');
    if(user.role!=='admin')
      return res.status(403).send('Not allowed. You don\'t have admin access.');

    next()
  })
}

module.exports.authAdmin = (req, res) => {
  const token = req.cookies.at
  console.log(token)

  if(token == null)
    return res.send(false)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err)
      return res.send(false);
    if(user.role!=='admin')
      return res.send(false);

    return res.send(true)
  })
}

function generateAccessToken(username, role) {
  return jwt.sign({username: username, role: role}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '4h' })
}

