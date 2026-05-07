const express = require("express");
const router = express.Router();


const {

  getAllVisits,
  getVisitById,
  createVisit,
  updateVisit,
  deleteVisit,

} = require("../controllers/visitController");



router.get("/", getAllVisits);
router.get("/:id", getVisitById);
router.post("/", createVisit);
router.put("/:id", updateVisit);
router.delete("/:id", deleteVisit);


module.exports = router;