const Teacher = require("../models/teacher.model");
let convertToObjectId = require("mongodb").ObjectId;

module.exports.getAllTeacher = async (req, res) => {
    const teachers = await Teacher.find();

    // name: String,
    // email: String,
    // sdt: String,
    // ngaysinh: Date,
    // isAssistant: Boolean,
    // subject: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: subject.modelName,
    // },

    // Teacher.insertMany([
    //     {
    //         name: "Tom Hiddleston",
    //         email: "tomhiddleston85@hotmail.com",
    //         sdt: "0123456789",
    //         ngaysinh: new Date("10-12-1985"),
    //         gioitinh: true,
    //         isAssistant: false,
    //         subject: "5ec1764a2bedbc07b885ba1c",
    //     },
    //     {
    //         name: "Elizabeth",
    //         email: "elizabeth87@hotmail.com",
    //         sdt: "0123456789",
    //         ngaysinh: new Date("09-10-1987"),
    //         gioitinh: false,
    //         isAssistant: false,
    //         subject: "5ec1764a2bedbc07b885ba1c",
    //     },
    //     {
    //         name: "Jennifer",
    //         email: "jennifer88@hotmail.com",
    //         sdt: "0123456789",
    //         ngaysinh: new Date("11-10-1988"),
    //         gioitinh: false,
    //         isAssistant: false,
    //         subject: "5ec1764a2bedbc07b885ba1c",
    //     },
    //     {
    //         name: "Nguyễn Xuân Tú",
    //         email: "xuantu85@hotmail.com",
    //         sdt: "0123456789",
    //         ngaysinh: new Date("12-11-1985"),
    //         gioitinh: true,
    //         isAssistant: true,
    //         subject: "5ec1764a2bedbc07b885ba1c",
    //     },
    //     {
    //         name: "Nguyễn Thị Ngân",
    //         email: "ngathuy87@hotmail.com",
    //         sdt: "0123456789",
    //         ngaysinh: new Date("10-13-1987"),
    //         gioitinh: false,
    //         isAssistant: true,
    //         subject: "5ec1764a2bedbc07b885ba1c",
    //     },
    //     {
    //         name: "Nguyễn Thị Thảo",
    //         email: "thaothao88@hotmail.com",
    //         sdt: "0123456789",
    //         ngaysinh: new Date("10-10-1988"),
    //         gioitinh: false,
    //         isAssistant: true,
    //         subject: "5ec1764a2bedbc07b885ba1c",
    //     },
    // ]).then((da) => console.log(da));

    res.send(teachers);
};

module.exports.editTeacherInfo = async (req, res) => {
    console.log(req.body);
    Teacher.find({ _id: convertToObjectId(req.body._id) })
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

module.exports.addNewTeacher = async (req, res) => {
    const teacher = new Teacher(req.body);
    const result = await teacher.save();
    res.send(result);
};

module.exports.deleteTeacherById = async (req, res) => {
    const idTeacher = req.params.id;
    const result = await Teacher.deleteOne({
        _id: convertToObjectId(idTeacher),
    });
    res.send(result);
};
