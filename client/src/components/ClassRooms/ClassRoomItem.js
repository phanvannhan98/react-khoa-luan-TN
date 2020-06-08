import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions/actions";
import getToken from "utils/getToken";

function ClassRoomItem(props) {
    const teachers = useSelector((state) => state.teacher);
    const userInfo = useSelector((state) => state.userInfo);
    const studentStudying = useSelector((state) => state.studentStudying);

    const ssOfUser = studentStudying.filter((v) => v.user === userInfo._id);

    const dispatch = useDispatch();

    const { name, numOfStudents, room, startDay, _id, teacher, assistant } =
        props.value || {};

    const trangthai = ["Chờ duyệt", "Đã duyệt", "Đã học xong"];
    const mausac = ["#c0b131", "#3f903f", "#808080"];
    const dadangky = ssOfUser.find((v) => v.classroom === _id);

    const teacherName = teachers.find((v) => v._id === teacher);
    const assistantName = teachers.find((v) => v._id === assistant);

    const isStudyingPage =
        props.location.pathname.includes("studying") === true;
    const clName = "";
    console.log(dadangky);
    const choseSubject = () => {
        const data = {
            classroom: _id,
            user: userInfo._id,
        };
        const token = getToken();
        console.log(token.length);
        if (token) {
            dispatch(actions.actAddNewStudentStudyingRequest(data));
        } else {
            props.history.push("/home/login");
        }
    };

    return (
        <div
            className={clName + "course bg-white h-100 align-self-stretch"}
            style={{ cursor: "default" }}
        >
            <figure className="m-0">
                {!isStudyingPage && _id ? (
                    <Link to={`/courses/studying/${_id}`}>
                        <img
                            src={
                                props.img
                                    ? `/images/img_${props.img}.jpg`
                                    : "/images/backagain.png"
                            }
                            className="img-fluid"
                            style={{ height: "205px" }}
                            alt={name}
                        />
                    </Link>
                ) : (
                    <div>
                        <img
                            src={
                                props.img
                                    ? `/images/img_${props.img}.jpg`
                                    : "/images/backagain.png"
                            }
                            className="img-fluid"
                            style={{ height: "205px" }}
                            alt={name}
                        />
                    </div>
                )}
            </figure>
            <div className="course-inner-text py-4 px-4">
                {_id ? (
                    <>
                        <span
                            className="course-price"
                            style={{
                                background:
                                    (dadangky && mausac[dadangky.trangthai]) ||
                                    "#923939",
                                cursor: "pointer",
                            }}
                            onClick={() => choseSubject()}
                        >
                            {dadangky && dadangky._id
                                ? trangthai[dadangky && dadangky.trangthai]
                                : "Chưa dăng ký"}
                        </span>
                        <div className="meta">
                            <span className="icon-clock-o far fa-clock" />
                            Bắt Đầu: {moment(startDay).format("DD/MM/YYYY")}
                        </div>
                        <h3>
                            <a href="/">{name + " Class"}</a>
                        </h3>
                        <p style={{ fontWeight: "bold" }}>Phòng: {room}</p>
                        <p>
                            Giáo viên:{" "}
                            {(teacherName && teacherName.name) || "Robinson"}{" "}
                            <br /> Trợ giảng:{" "}
                            {(assistantName && assistantName.name) ||
                                "Phan Văn Nhân"}
                        </p>
                    </>
                ) : (
                    <p>Hiện không có lớp nào!</p>
                )}
            </div>
            <div className="d-flex border-top stats">
                <div className="py-3 px-4">
                    <span className="icon-users fas fa-users" /> {numOfStudents}{" "}
                    students
                </div>
                <div className="py-3 px-4 w-25 ml-auto border-left">
                    <span className="icon-chat fas fa-comments" /> 2
                </div>
            </div>
        </div>
    );
}

export default ClassRoomItem;
