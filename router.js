const express = require("express");
const router = express.Router();

//updated with actual routes from scaffolding that was made earlier!!!!

const cafeRoutes = require("./routes/cafeRoutes");

const visitRoutes = require("./routes/visitRoutes");

router.use("/cafes", cafeRoutes);

router.use("/visits", visitRoutes);


module.exports = router;