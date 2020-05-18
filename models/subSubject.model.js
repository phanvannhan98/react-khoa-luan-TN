const mongoose = require("mongoose");
const subject = require("./subject.model");

const subSubject = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    subjectType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: subject.modelName,
    },
    level: Number,
    image: String,
    lessonNum: Number,
});

module.exports = mongoose.model("subSubject", subSubject);
