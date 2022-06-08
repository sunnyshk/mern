const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  make: { type: String, required: true },
  year: { type: String, required: true },
});

module.exports = mongoose.model("car", carSchema);
