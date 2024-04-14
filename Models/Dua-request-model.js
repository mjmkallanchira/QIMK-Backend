const mongoose = require("mongoose");

const duaSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    reason: {
        type: String,
        require: true,
    },
});
const DuaModel = new mongoose.model("Dua", duaSchema);

module.exports = DuaModel;
