const mongoose = require("mongoose");

const RepresentativeSchema = new mongoose.Schema({
    Representative: {
        type: Array,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
});
const RepresentativeModel = new mongoose.model("Representative", RepresentativeSchema);

module.exports = RepresentativeModel;
