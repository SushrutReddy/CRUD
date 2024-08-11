const express = require("express");
const router = express.Router();
const Student = require("../models/students");

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

router.post("/", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await student.save();
    res.send(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/", async (req, res) => {
  try {
    const student = await Student.find({ name: req.body.name });
    student.sub = req.body.sub;
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
    student.sub = req.body.sub;
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
