const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
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
    default: "admin",
  }
})

module.exports = mongoose.model("admins", AdminSchema)
