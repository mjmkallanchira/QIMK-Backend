const mongoose = require("mongoose");

const ContacttSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
});
const ContactModel = new mongoose.model("contact", ContacttSchema);

module.exports = ContactModel;
