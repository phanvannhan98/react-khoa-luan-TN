const Classroom = require("../models/classroom.model");
let convertToObjectId = require("mongodb").ObjectId;

module.exports.getAllClassroom = async (req, res) => {
    const classrooms = await Classroom.find();
    res.send(classrooms);
};

module.exports.editClassroomInfo = async (req, res) => {
    console.log(req.body);
    Classroom.find({ _id: convertToObjectId(req.body._id) })
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

module.exports.addNewClassroom = async (req, res) => {
    const classroom = new Classroom(req.body);
    const result = await classroom.save();
    res.send(result);
};

module.exports.deleteClassroomById = async (req, res) => {
    const idClassroom = req.params.id;
    const result = await Classroom.deleteOne({
        _id: convertToObjectId(idClassroom),
    });
    res.send(result);
};
