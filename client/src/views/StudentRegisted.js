import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import * as actions from "../actions/actions";

function StudentRegisted(props) {
    const classrooms = useSelector((state) => state.classroom);
    const subSubjects = useSelector((state) => state.subSubject);
    const userInfo = useSelector((state) => state.userInfo);
    const studentStudyings = useSelector((state) => state.studentStudying);

    const dispatch = useDispatch();
    const ssOfUser = studentStudyings.filter((v) => v.user === userInfo._id);
    console.log(ssOfUser);

    const buoi = ["Sáng", "Chiều", "Tối"];
    const thu = ["Thứ 2, 4, 6", "Thứ 3, 5, 7"];
    const trangthai = ["Chờ duyệt", "Đã duyệt", "Đã học xong"];
    const mausac = ["#c0b131", "#3f903f", "#808080"];

    const showContent = () => {
        let result = [];
        result = ssOfUser.map((v, i) => {
            let classroom = classrooms.find((c) => c._id === v.classroom);
            let subject = subSubjects.find(
                (s) => s._id === classroom.subSubject
            );
            console.log(classroom);
            return (
                <tr key={v._id}>
                    <td>Lớp {classroom && classroom.name}</td>
                    <td>{subject && subject.name}</td>
                    <td>{moment(v.ngaydk).format("DD/MM/YYYY")}</td>
                    <td>{thu[classroom.time[1] - 1]}</td>
                    <td>{buoi[classroom.time[0] - 1]}</td>
                    <td>
                        <label
                            style={{
                                color: mausac[v.trangthai],
                                fontWeight: "bold",
                            }}
                        >
                            {trangthai[v.trangthai]}
                        </label>
                    </td>
                    <td>
                        <button
                            className="btn btn-danger"
                            disabled={v.trangthai !== 0}
                            onClick={() =>
                                dispatch(
                                    actions.actDeleteStudentStudyingRequest(
                                        v._id
                                    )
                                )
                            }
                        >
                            Huỷ đăng kí
                        </button>
                    </td>
                </tr>
            );
        });
        return result;
    };
    return (
        <>
            <div className="site-section courses-title" id="courses-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div
                            className="col-lg-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay
                        >
                            <h2 className="section-title">Lớp đã đăng kí</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="site-section courses-entry-wrap"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <table
                                className="table table-hover"
                                style={{
                                    background: "#fff",
                                    border: "1px solid #c8a9a9",
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th>Lớp học</th>
                                        <th>Môn học</th>
                                        <th>Ngày đăng kí</th>
                                        <th>Thứ</th>
                                        <th>Buổi</th>
                                        <th>Trạng thái</th>
                                        <th>Huỷ đăng kí</th>
                                    </tr>
                                </thead>
                                <tbody>{showContent()}</tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-7 text-center">
                            <button
                                className="customPrevBtn btn btn-primary m-1"
                                href="#carouselExampleIndicators"
                                data-slide="prev"
                            >
                                Prev
                            </button>
                            <button
                                className="customNextBtn btn btn-primary m-1"
                                href="#carouselExampleIndicators"
                                data-slide="next"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentRegisted;
