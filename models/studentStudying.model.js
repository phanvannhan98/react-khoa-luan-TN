const mongoose = require("mongoose");
const user = require("./user.model");
const classroom = require("./classroom.model");

const studentStudying = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: user.modelName },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: classroom.modelName,
    },
    ngaydk: Date,
    trangthai: Number,
});

module.exports = mongoose.model("studentStudying", studentStudying);
