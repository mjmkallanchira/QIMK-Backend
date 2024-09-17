const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  stagepoint:  {
    type: Number,
    require: true,
  },
  offstagepoint: {
    type: Number,
    require: true,
  },
});

const TeamModel = new mongoose.model("Team", TeamSchema);

module.exports = TeamModel;
