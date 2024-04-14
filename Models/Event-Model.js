const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
});
const EventModel = new mongoose.model("Event", EventSchema);

module.exports = EventModel;
