const mongoose = require('mongoose')

const Role_3Schema = new mongoose.Schema({
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
    default: "role_3",
  }
})

module.exports = mongoose.model("role_3", Role_3Schema)
