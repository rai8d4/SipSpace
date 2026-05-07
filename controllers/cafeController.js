const Cafe = require("../models/Cafe");

// GET all cafes
const getAllCafes = async (req, res) => {

  try {
    const cafes = await Cafe.find();
    res.json(cafes);

  } catch (error) {
    res.status(500).json({ message: error.message });


  }
};

// GET singular cafe by ID
const getCafeById = async (req, res) => {


  try {
    const cafe = await Cafe.findById(req.params.id);
    if (!cafe) return res.status(404).json({ message: "Cafe not found" });
    res.json(cafe);

  } catch (error) {
    res.status(500).json({ message: error.message });


  }
};


// POST create new cafe
const createCafe = async (req, res) => {


  try {
    const cafe = new Cafe(req.body);
    const savedCafe = await cafe.save();
    res.status(201).json(savedCafe);


  } catch (error) {

    res.status(400).json({ message: error.message });
  }
};


// PUT update cafe by ID
const updateCafe = async (req, res) => {


  try {
    const updatedCafe = await Cafe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCafe) return res.status(404).json({ message: "Cafe not found" });
    res.json(updatedCafe);


  } catch (error) {
    res.status(400).json({ message: error.message });


  }
};

// DELETE cafe by ID
const deleteCafe = async (req, res) => {


  try {
    const deletedCafe = await Cafe.findByIdAndDelete(req.params.id);
    if (!deletedCafe) return res.status(404).json({ message: "Cafe not found" });
    res.json({ message: "Cafe deleted successfully" });


  } catch (error) {
    res.status(500).json({ message: error.message });

  }
};



module.exports = { getAllCafes, getCafeById, createCafe, updateCafe, deleteCafe };