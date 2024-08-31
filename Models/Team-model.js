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
    point:{
        type:Number,
        require:true
    }
});

const TeamModel = new mongoose.model("Team", TeamSchema);

module.exports = TeamModel;


