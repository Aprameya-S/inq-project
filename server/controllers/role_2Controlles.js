const role2Model = require('../models/role_2Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.addRole2User = async (req, res) => {
  const data = req.body;
  // console.log(data)
  try {
    //hash password with 10 character salt
    data.pass = await bcrypt.hash(data.pass, 10);
    role2Model.create(
      data
    ).then ((data) => {
      console.log("New Role 2 user Added Successfully...");
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

module.exports.loginRole2User = async (req, res) => {
  const curUser = await role2Model.find({username:req.body.username});

  // console.log(curUser)

  if(!curUser.length){
    return res.status(400).send('Cannot find user')
  }
  if(curUser[0].role!=="role2"){
    return res.status(400).send('You are not a role 2 user')
  }
  try {
    // console.log(req.body.pass, curUser[0].pass);
    if(await bcrypt.compare(req.body.pass, curUser[0].pass)){
      // res.status(200).send('Success')
      const accessToken = generateAccessToken(req.body.username, 'role2');

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

module.exports.logoutRole2User = async(req,res) => {

  res.cookie("at",null,{
    httpOnly: true,
    maxAge: -1,
    path: '/api',
    sameSite: "strict",
    secure: true,
  }).json({ status: "success" });
  
}

module.exports.authRole2UserToken = (req, res, next) => {
  const token = req.cookies.at

  if(token == null)
    return res.status(401).send('Not allowed');

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // console.log(user)
    if(err)
      return res.status(403).send('Not allowed');
    if(user.role!=='role2')
      return res.status(403).send('Not allowed. You don\'t have role 2 access.');

    next()
  })
}

module.exports.authRole2 = (req, res) => {
  const token = req.cookies.at

  if(token == null)
    return res.send(false)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err)
      return res.send(false);
    if(user.role!=='role2')
      return res.send(false);

    return res.send(true)
  })
}

function generateAccessToken(username, role) {
  return jwt.sign({username: username, role: role}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '4h' })
}

