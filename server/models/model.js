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
  eligible: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("model", studentSchema);
