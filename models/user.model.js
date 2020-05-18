const mongoose = require("mongoose");

const user = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    ngaysinh: Date,
    soCmnd: String,
    email: String,
    sdt: String,
    gioitinh: String,
    diachi: String,
    aboutme: String,
});

module.exports = mongoose.model("user", user);
