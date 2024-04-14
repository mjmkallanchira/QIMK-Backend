const mongoose = require("mongoose");

const guidesSchema = new mongoose.Schema({
    class: {
        type: "string",
        require: true,
    },
    subjects: {
        type: Array,
        require: true,
    },
});
const GuidesModel = new mongoose.model("guide", guidesSchema);

module.exports = GuidesModel;
