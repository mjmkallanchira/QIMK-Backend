const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isadmin: {
        type: Boolean,
        default: false,
    },
});
const UserModel = new mongoose.model("User", UserSchema);

module.exports=UserModel
