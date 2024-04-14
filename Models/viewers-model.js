const mongoose = require("mongoose");
const viewerschema = new mongoose.Schema({
    views: {
        type: Number,
        require: true,
    },
});
const viewsmodel = new mongoose.model("views", viewerschema);
module.exports = viewsmodel;
