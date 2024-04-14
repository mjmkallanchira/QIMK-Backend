const mongoose = require("mongoose");
const prayertimeschema = new mongoose.Schema({
    date: {
        type: String,
        require: true,
    },
    fajr: {
        type: String,
        require: true,
    },
    zuhr: {
        type: String,
        require: true,
    },
    asr: {
        type: String,
        require: true,
    },
    maghrib: {
        type: String,
        require: true,
    },
    isha: {
        type: String,
        require: true,
    },
    jumma: {
        type: Boolean,
        default: false,
    },
    nameofkhatib:{
        type:String,
        require:false,
    },
    imageofkhatib:{
        type:String,
        require:false
    },
    timeofkhutba:{
        type:String,
        require:false
    }
});
const prayertimemodel = new mongoose.model("prayertime", prayertimeschema);
module.exports = prayertimemodel;
