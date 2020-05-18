const Subject = require("../models/subject.model");

module.exports.getAllSubject = async (req, res) => {
    const subject = await Subject.find();

    // Subject.insertMany([
    //     {
    //         name: "Tiếng Hàn",
    //         description: "Đây là khoá học tiếng Hàn cho người mới bắt đầu...",
    //         price: 30,
    //         image: "/images/img_avatar.png",
    //         numberOflevel: 3,
    //     },
    //     {
    //         name: "Tiếng Anh",
    //         description: "Đây là khoá học tiếng Anh cho người mới bắt đầu...",
    //         price: 30,
    //         image: "/images/img_avatar.png",
    //         numberOflevel: 3,
    //     },
    //     {
    //         name: "Tiếng Pháp",
    //         description: "Đây là khoá học tiếng Pháp cho người mới bắt đầu...",
    //         price: 31,
    //         image:
    //             "/images/1581600661748-71392615_3018445978168915_8470617660327985152_n.jpg",
    //         numberOflevel: 4,
    //     },
    //     {
    //         name: "Tiếng Trung",
    //         description: "Đây là khoá học tiếng Trung cho người mới bắt đầu...",
    //         price: 33,
    //         image: "/images/1581323971243-user.png",
    //         numberOflevel: 5,
    //     },
    // ]).then((da) => console.log(da));

    res.send(subject);
};
