const StudentStudying = require("../models/studentStudying.model");
let convertToObjectId = require("mongodb").ObjectId;

module.exports.getAllStudentStudying = async (req, res) => {
    let data = await StudentStudying.find().populate({
        path: "user",
        select: "name _id",
    });
    res.send(data);
};

module.exports.editStudentStudyingInfo = async (req, res) => {
    console.log(req.body);
    StudentStudying.find({ _id: convertToObjectId(req.body._id) })
        .updateOne({ $set: req.body })
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({
                    data: result,
                    message: "success",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
};

module.exports.addNewStudentStudying = async (req, res) => {
    const data = new StudentStudying({
        ...req.body,
        ngaydk: Date.now(),
        trangthai: 0,
    });
    const result = await data.save();

    let a = await StudentStudying.findOne({
        _id: convertToObjectId(result._id),
    }).populate({
        path: "user",
        select: "name _id",
    });

    res.send(a);
};

module.exports.deleteStudentStudyingById = async (req, res) => {
    const id = req.params.id;
    const result = await StudentStudying.deleteOne({
        _id: convertToObjectId(id),
    });
    res.send(result);
};
