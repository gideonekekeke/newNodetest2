const gaming = require("../model/model");

//function for the get post put delete

const getAll = async (req, res) => {
  try {
    const getData = await gaming.find();
    res.status(200).json(getData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const posting = async (req, res) => {
  try {
    const postData = await gaming.create({
      name: req.body.name,
    });
    res.status(200).json({ postData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getID = async (req, res) => {
  try {
    const gettingId = await gaming.findById(req.params.id);
    res.status(200).json(gettingId);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getID,
  posting,
};
