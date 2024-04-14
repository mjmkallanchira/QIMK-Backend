const mongoose = require("mongoose");

const LiveSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
});
const LiveModel = new mongoose.model("Live", LiveSchema);

module.exports=LiveModel
