const mongoose = require('mongoose')

const Role_2Schema = new mongoose.Schema({
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
    default: "role_2",
  }
})

module.exports = mongoose.model("role_2", Role_2Schema)
