const Visit = require("../models/Visit");

// GET all visits
const getAllVisits = async (req, res) => {


  try {
    const visits = await Visit.find().populate("cafeId");
    res.json(visits);


  } catch (error) {
    res.status(500).json({ message: error.message });

  }
};

// GET singularr visit by ID

const getVisitById = async (req, res) => {


  try {
    const visit = await Visit.findById(req.params.id).populate("cafeId");
    if (!visit) return res.status(404).json({ message: "Visit not found" });
    res.json(visit);


  } catch (error) {
    res.status(500).json({ message: error.message });


  }
};

// POST create new visit

const createVisit = async (req, res) => {


  try {
    const visit = new Visit(req.body);
    const savedVisit = await visit.save();
    res.status(201).json(savedVisit);


  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update visit by ID
const updateVisit = async (req, res) => {

  try {
    const updatedVisit = await Visit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVisit) return res.status(404).json({ message: "Visit not found" });
    res.json(updatedVisit);


  } catch (error) {
    res.status(400).json({ message: error.message });


  }
};

// DELETE visit by ID
const deleteVisit = async (req, res) => {


  try {
    const deletedVisit = await Visit.findByIdAndDelete(req.params.id);
    if (!deletedVisit) return res.status(404).json({ message: "Visit not found" });
    res.json({ message: "Visit deleted successfully" });


  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};


module.exports = { getAllVisits, getVisitById, createVisit, updateVisit, deleteVisit };