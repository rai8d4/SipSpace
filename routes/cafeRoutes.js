const express = require("express");
const router = express.Router();


const {

  getAllCafes,
  getCafeById,
  createCafe,
  updateCafe,
  deleteCafe,
  
} = require("../controllers/cafeController");



router.get("/", getAllCafes);
router.get("/:id", getCafeById);
router.post("/", createCafe);
router.put("/:id", updateCafe);
router.delete("/:id", deleteCafe);



module.exports = router;