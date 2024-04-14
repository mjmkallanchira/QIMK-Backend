const mongoose = require("mongoose");
const StudentsSchema = new mongoose.Schema({
    gender: {
        type: String,
        require: true,
    },
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    "+1": [],
    "+2": [],
});
const StudentsModel = new mongoose.model("student", StudentsSchema);

module.exports = StudentsModel;
