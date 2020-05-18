const mongoose = require("mongoose");

const subject = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    numberOflevel: Number,
});

module.exports = mongoose.model("subject", subject);
