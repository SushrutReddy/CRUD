const express = require("express");
const router = express.Router();
const Student = require("../models/model");

router.get("/", async (req, res) => {
  try {
    const student = await Student.find();
    res.send(student);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.send(student);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:rollno", async (req, res) => {
  try {
    const student = await Student.findOne(req.params.rollno);
    res.send(student);
  } catch (err) {
    res.send("Error " + err);
  }
});


router.post("/", async (req, res) => {
  const student = new Student({
    rollno: req.body.rollno,
    name: req.body.name,
    section: req.body.section,
    promoted: req.body.promoted,
    certifications: req.body.certifications,
  });

  try {
    const a1 = await student.save();
    res.send(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/", async (req, res) => {
  let rollno=req.body.rollno;
  let promoted=req.body.promoted;
  console.log(rollno,promoted)
  try {
    const student = await Student.findOne({ rollno:rollno });
    student.promoted = req.body.promoted;
    const a1 = await student.save();
    res.send(a1);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const student = await Student.findById(id);
    student.promoted = req.body.promoted;
    const a1 = await student.save();
    res.send(a1);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
    try {
      const student = await Student.deleteOne(req.params.id);
      res.send(student);
    } catch (err) {
      res.send("Error " + err);
    }
  });

module.exports = router;
