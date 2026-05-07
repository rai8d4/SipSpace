const mongoose = require("mongoose");


//might need to alter schema structure, but for now this should cover everything we want! 


const visitSchema = new mongoose.Schema({

  date: { type: Date, required: true },
  cafeId: { type: mongoose.Schema.Types.ObjectId, ref: "Cafe" },
  drinkName: { type: String },
  drinkPrice: { type: Number },
  drinkRating: { type: Number },
  ambiance: { type: String },
  productivityLevel: { type: Number },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Visit", visitSchema);