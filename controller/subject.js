const Subject = require("../models/subject.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addsubject = async (req, res, next) => {
  const { couser_id, subject_name } = req.bodt;
  const addsubject = await Subject.create({ couser_id, subject_name });
  res.status(200).json(addsubject);
};



const getsubject = async (req, res, next) => { 
  const getsubject = await Subject.findAll();
  res.status(200).json(getsubject);
}

module.exports = {
  addsubject,
  getsubject
};
