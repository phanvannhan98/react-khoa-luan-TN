const SubSubject = require("../models/subSubject.model");

module.exports.getAllSubSubject = async (req, res) => {
    const subSubject = await SubSubject.find();

    // SubSubject.insertMany([
    //     {
    //         name: "Tiếng Anh A2",
    //         description:
    //             "Đây là khoá học tiếng Anh A2 cho người mới bắt đầu...",
    //         price: 5,
    //         subjectType: "5ec171ac5b719637a474b43a",
    //         image: "/images/img_avatar.png",
    //         level: 1,
    //         lessonNum: 15,
    //     },
    //     {
    //         name: "Tiếng Anh A1",
    //         description:
    //             "Đây là khoá học tiếng Anh A1 cho người mới bắt đầu...",
    //         price: 10,
    //         image: "/images/img_avatar.png",
    //         level: 2,
    //         lessonNum: 20,
    //     },
    //     {
    //         name: "Tiếng Anh B1",
    //         description:
    //             "Đây là khoá học tiếng Anh B1 cho người mới bắt đầu...",
    //         price: 15,
    //         image: "/images/img_avatar.png",
    //         level: 3,
    //         lessonNum: 20,
    //     },
    // ]).then((da) => console.log(da));

    res.send(subSubject);
};
