const express = require("express");
const mongoose = require("mongoose");
// const cors = require('cors')
const studentRouter = require("./routes/student");

const url =
  "mongodb+srv://goodellysushrut:9381128949@cluster0.w5fmtyk.mongodb.net/College";
const app = express();
mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});
// app.use(cors())
app.use(express.json());

app.use("/student", studentRouter);
app.listen(9000, () => {
  console.log("Server started on 9000");
});
