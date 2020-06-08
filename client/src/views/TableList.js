import React, { useState } from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";
import PaginationCf from "components/Pagination/PaginationCf";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import * as actions from "../actions/actions";
import { FormGroup, MenuItem, Select } from "@material-ui/core";

const Tables = (props) => {
    const teacher = useSelector((state) => state.teacher);
    const classrooms = useSelector((state) => state.classroom);
    const subSubjects = useSelector((state) => state.subSubject);
    const subjects = useSelector((state) => state.subject);

    const [txtName, setTxtName] = useState("");
    const [monhoc, setMonhoc] = useState("-1");
    const [lophoc, setLophoc] = useState("-1");

    const studentStudyings = useSelector((state) => state.studentStudying);

    let ssFilter = studentStudyings.filter((v) =>
        v.user.name.toUpperCase().includes(txtName.toUpperCase())
    );

    ssFilter =
        lophoc !== "-1"
            ? ssFilter.filter((v) => v.classroom === lophoc)
            : ssFilter;

    const dispatch = useDispatch();

    const buoi = ["Sáng", "Chiều", "Tối"];
    const thu = ["Thứ 2, 4, 6", "Thứ 3, 5, 7"];
    const trangthai = ["Chờ duyệt", "Đã duyệt", "Đã học xong"];
    const mausac = ["#c0b131", "#3f903f", "#808080"];

    const gender = {
        "1": "Nam",
        "-1": "Nữ",
        "0": "Khác",
        true: "Nam",
        false: "Nữ",
    };

    const showTableData = () =>
        teacher.map((value, index) => (
            <tr
                key={index}
                style={{ cursor: "pointer" }}
                onDoubleClick={() =>
                    props.history.push("/admin/edit-teacher/" + value._id)
                }
                title="Double Click to Edit"
            >
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.sdt}</td>
                <td>{moment(value.ngaysinh).format("DD/MM/YYYY")}</td>
                <td>{gender[value.gioitinh]}</td>
                <td>{(value.isAssistant && "Trợ giảng") || "Giáo viên"}</td>
                <td>
                    {subjects.length &&
                        subjects.find((v) => v._id === value.subject).name}
                </td>
            </tr>
        ));

    const showClassroomData = () =>
        classrooms.map((value, index) => (
            <tr
                key={index}
                style={{ cursor: "pointer" }}
                onDoubleClick={() =>
                    props.history.push("/admin/edit-classroom/" + value._id)
                }
                title="Double Click to Edit"
            >
                <td>{value.name}</td>
                <td>{value.room}</td>
                <td>{value.numOfStudents}</td>
                <td>{moment(value.startDay).format("DD/MM/YYYY")}</td>
                <td>
                    {buoi[value.time[0] - 1] + " - " + thu[value.time[1] - 1]}
                </td>
                <td>
                    {subSubjects.length &&
                        subSubjects.find((v) => v._id === value.subSubject)
                            .name}
                </td>
            </tr>
        ));

    const showStudentStudying = () =>
        ssFilter
            .filter((val) => classrooms.find((c) => c._id === val.classroom))
            .filter((val) => {
                let classroom = classrooms.find((c) => c._id === val.classroom);
                if (monhoc === "-1") return true;
                return classroom.subSubject === monhoc;
            })
            .map((v, i) => {
                let classroom = classrooms.find((c) => c._id === v.classroom);
                let subject =
                    classroom &&
                    subSubjects.find((s) => s._id === classroom.subSubject);
                return (
                    <tr key={v._id}>
                        <td>{classroom && classroom.name}</td>
                        <td>{subject && subject.name}</td>
                        <td>{v.user.name}</td>
                        <td>{moment(v.ngaydk).format("DD/MM/YYYY")}</td>
                        <td>
                            {buoi[classroom.time[0] - 1] +
                                " - " +
                                thu[classroom.time[1] - 1]}
                        </td>
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
                            {v.trangthai === 0 ? (
                                <button
                                    className="btn btn-warning"
                                    onClick={() =>
                                        dispatch(
                                            actions.actUpdateStudentStudyingInfoRequest(
                                                { ...v, trangthai: 1 }
                                            )
                                        )
                                    }
                                >
                                    Duyệt
                                </button>
                            ) : v.trangthai === 1 ? (
                                <button
                                    className="btn btn-success"
                                    onClick={() =>
                                        dispatch(
                                            actions.actUpdateStudentStudyingInfoRequest(
                                                { ...v, trangthai: 2 }
                                            )
                                        )
                                    }
                                >
                                    Kết thúc
                                </button>
                            ) : (
                                <button
                                    className="btn btn-primary"
                                    onClick={() =>
                                        dispatch(
                                            actions.actUpdateStudentStudyingInfoRequest(
                                                { ...v, trangthai: 0 }
                                            )
                                        )
                                    }
                                >
                                    Đặt lại
                                </button>
                            )}
                        </td>
                    </tr>
                );
            });

    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">QUẢN LÝ GIÁO VIÊN</CardTitle>
                            <Link
                                className="category btn btn-info mt-1"
                                to="/admin/add-teacher"
                            >
                                Add new Teacher
                            </Link>
                        </CardHeader>
                        <CardBody>
                            <Table className="tablesorter" responsive hover>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Họ Tên</th>
                                        <th>Email</th>
                                        <th>SĐT</th>
                                        <th>Ngày sinh</th>
                                        <th>Giới tính</th>
                                        <th>Vai trò</th>
                                        <th>Dạy môn</th>
                                    </tr>
                                </thead>
                                <tbody>{showTableData()}</tbody>
                            </Table>
                            {!(teacher.length < 10) && (
                                <PaginationCf
                                    dataLength={teacher.length}
                                    tableSize={10}
                                />
                            )}
                        </CardBody>
                    </Card>
                </Col>
                <Col md="12">
                    <Card className="card-plain">
                        <CardHeader>
                            <CardTitle tag="h4">QUẢN LÝ LỚP HỌC</CardTitle>
                            <Link
                                className="category btn btn-light mt-1"
                                to="/admin/add-classroom"
                            >
                                Add new Class room
                            </Link>
                        </CardHeader>
                        <CardBody>
                            <Table className="tablesorter" responsive hover>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Tên lớp học</th>
                                        <th>Phòng học</th>
                                        <th>Số lượng học viên</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Thời gian học</th>
                                        <th>Môn học</th>
                                    </tr>
                                </thead>
                                <tbody>{showClassroomData()}</tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="12">
                    <Card className="card-plain">
                        <CardHeader>
                            <CardTitle tag="h4">QUẢN LÝ ĐĂNG KÍ HỌC</CardTitle>
                            {/* <Link
                                className="category btn btn-light mt-1"
                                to="/admin/add-classroom"
                            >
                                Add new Class room
                            </Link> */}
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <label>Họ tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={txtName}
                                            onChange={(e) =>
                                                setTxtName(e.target.value)
                                            }
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <label>Môn học</label>
                                        <Select
                                            id="demo-simple-select"
                                            value={monhoc}
                                            className="form-control"
                                            onChange={(e) =>
                                                setMonhoc(e.target.value)
                                            }
                                        >
                                            {subSubjects.length &&
                                                subSubjects.map((v) => (
                                                    <MenuItem
                                                        key={v._id}
                                                        value={v._id}
                                                    >
                                                        {v.name}
                                                    </MenuItem>
                                                ))}
                                            <MenuItem value={"-1"}>
                                                Không chọn
                                            </MenuItem>
                                        </Select>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <label>Lớp học</label>
                                        <Select
                                            id="demo-simple-select"
                                            value={lophoc}
                                            className="form-control"
                                            onChange={(e) =>
                                                setLophoc(e.target.value)
                                            }
                                        >
                                            {classrooms.length &&
                                                classrooms.map((v) => (
                                                    <MenuItem
                                                        key={v._id}
                                                        value={v._id}
                                                    >
                                                        {v.name}
                                                    </MenuItem>
                                                ))}
                                            <MenuItem value={"-1"}>
                                                Không chọn
                                            </MenuItem>
                                        </Select>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Table className="tablesorter" responsive hover>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Tên lớp học</th>
                                        <th>Môn học</th>
                                        <th>Tên học viên</th>
                                        <th>Ngày đăng kí</th>
                                        <th>Thời gian học</th>
                                        <th>Trạng thái</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>{showStudentStudying()}</tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Tables;
