import React from "react";
import { Link } from "react-router-dom";
import SubSubjectItem from "components/SubSubject/SubSubjectItem";
import { useSelector } from "react-redux";
import { Select, MenuItem } from "@material-ui/core";
import { Col } from "reactstrap";

function Studying(props) {
    const subSubject = useSelector((state) => state.subSubject);
    const subject = useSelector((state) => state.subject);
    const idSubSubject = props.match.params.id;

    const ssb = subSubject.find((v) => v._id === idSubSubject);
    const sb = ssb ? subject.find((v) => v._id === ssb.subjectType) : {};

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
                            <h2 className="section-title">Courses</h2>
                            <h3
                                className="section-title"
                                style={{ fontSize: "1.4rem" }}
                            >
                                Khoá Học: {sb && sb.name}
                            </h3>
                            <h3
                                className="section-title"
                                style={{ fontSize: "1.3rem" }}
                            >
                                Môn Học: {ssb && ssb.name}
                            </h3>
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
                    <div
                        className="row"
                        style={{ justifyContent: "space-around" }}
                    >
                        <SubSubjectItem value={ssb} {...props} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Col
                        xl="4"
                        md="6"
                        xs="10"
                        style={{ display: "flex", marginTop: "1rem" }}
                    >
                        <span
                            to="/courses"
                            className="btn btn-primary text-center mobile-hide"
                        >
                            Buổi học
                        </span>
                        <Select
                            id="demo-simple-select"
                            className="form-control"
                            value={1}
                        >
                            <MenuItem value="1">
                                <span
                                    style={{
                                        minWidth: "80px",
                                        textAlign: "center",
                                    }}
                                >
                                    Sáng
                                </span>{" "}
                                ( 08:00 -> 10:00 )
                            </MenuItem>
                            <MenuItem value="2">
                                <span
                                    style={{
                                        minWidth: "80px",
                                        textAlign: "center",
                                    }}
                                >
                                    Chiều
                                </span>{" "}
                                ( 14:00 -> 16:00 )
                            </MenuItem>
                            <MenuItem value="3">
                                <span
                                    style={{
                                        minWidth: "80px",
                                        textAlign: "center",
                                    }}
                                >
                                    Tối
                                </span>{" "}
                                ( 18:00 -> 20:00 )
                            </MenuItem>
                        </Select>
                    </Col>
                </div>
                <div className="row justify-content-center">
                    <Col
                        xl="4"
                        md="6"
                        xs="10"
                        style={{ display: "flex", marginTop: "1rem" }}
                    >
                        <span
                            to="/courses"
                            className="btn btn-primary text-center mobile-hide"
                            style={{ minWidth: "123.67px" }}
                        >
                            Thứ
                        </span>
                        <Select
                            id="demo-simple-select"
                            className="form-control"
                            value="1"
                        >
                            <MenuItem value="1">
                                <span
                                    style={{
                                        textIndent: "20px",
                                        width: "100%",
                                    }}
                                >
                                    Thứ 2 - Thứ 4 - Thứ 6
                                </span>
                            </MenuItem>
                            <MenuItem value="2">
                                <span
                                    style={{
                                        textIndent: "20px",
                                        width: "100%",
                                    }}
                                >
                                    Thứ 3 - Thứ 5 - Thứ 7
                                </span>
                            </MenuItem>
                        </Select>
                    </Col>
                </div>
                <div className="row justify-content-center">
                    <Link
                        to={
                            (ssb && `/courses/${ssb.subjectType}`) || `/courses`
                        }
                        className="btn btn-primary mt-3 text-center mr-3"
                    >
                        Quay lại
                    </Link>
                    <Link
                        to="/courses"
                        className="btn btn-primary mt-3 text-center"
                    >
                        Đăng kí lớp
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Studying;
