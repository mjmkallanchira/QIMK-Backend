const mongoose = require("mongoose");

const DikrSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    file: {
        type: String,
        require: true,
    },
});

const DikrModel = new mongoose.model("Dikr", DikrSchema);

module.exports = DikrModel;


