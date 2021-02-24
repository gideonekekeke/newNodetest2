const mongoose = require("mongoose");

const genSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("gaming", genSchema);
