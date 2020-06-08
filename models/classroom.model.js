const mongoose = require("mongoose");
const subject = require("./subject.model");
const subSubject = require("./subSubject.model");
const teacher = require("./teacher.model");

const classroom = mongoose.Schema({
    name: String,
    room: String,
    numOfStudents: Number,
    startDay: Date,
    time: Array,
    subject: { type: mongoose.Schema.Types.ObjectId, ref: subject.modelName },
    subSubject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: subSubject.modelName,
    },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: teacher.modelName },
    assistant: { type: mongoose.Schema.Types.ObjectId, ref: teacher.modelName },
});

module.exports = mongoose.model("classroom", classroom);
