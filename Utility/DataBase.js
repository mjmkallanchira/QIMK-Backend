const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI
const connectdb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("database connected successfully");
    } catch (error) {
        console.log("connection failed");
        process.exit(0);
    }
};
module.exports = connectdb;
