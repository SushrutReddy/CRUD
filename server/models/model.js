const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollno:{
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  promoted: {
    type: Boolean,
    required: true,
    default: false,
  },
  certifications:{
    type: Number,
    required:true,
    default: 0
  }
});

module.exports = mongoose.model("model", studentSchema);
