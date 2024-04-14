const mongoose = require("mongoose");

const EducatorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
});

const EducatorModel = new mongoose.model("educator", EducatorSchema);

module.exports = EducatorModel;


