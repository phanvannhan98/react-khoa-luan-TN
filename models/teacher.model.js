const mongoose = require("mongoose");
const subject = require("./subject.model");

const teacher = mongoose.Schema({
    name: String,
    soCmnd: String,
    email: String,
    sdt: String,
    ngaysinh: Date,
    gioitinh: String,
    isAssistant: Boolean,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: subject.modelName,
    },
});

module.exports = mongoose.model("teacher", teacher);
