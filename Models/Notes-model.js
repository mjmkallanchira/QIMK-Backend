const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    class: {
        type: "string",
        require: true,
    },
    subjects: {
        type: Array,
        require: true,
    },
});
const NotesModel = new mongoose.model("Note", NotesSchema);

module.exports = NotesModel;
