const mongoose = require('mongoose')

const Role_4Schema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  pass:{
    type: String,
    required: true,
  },
  createdAt:{
    type:String,
    required:true,
  },
  role:{
    type: String,
    default: "role_4",
  }
})

module.exports = mongoose.model("role_4", Role_4Schema)
