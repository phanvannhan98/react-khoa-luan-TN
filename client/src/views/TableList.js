import React from "react";

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
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Tables = (props) => {
    const teacher = useSelector((state) => state.teacher);
    const classrooms = useSelector((state) => state.classroom);
    const subSubjects = useSelector((state) => state.subSubject);
    const subjects = useSelector((state) => state.subject);

    const gender = {
        "1": "Nam",
        "-1": "Nữ",
        "0": "Khác",
        true: "Nam",
        false: "Nữ",
    };

    const buoi = ["Sáng", "Chiều", "Tối"];
    const thu = ["Thứ 2, 4, 6", "Thứ 3, 5, 7"];

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
                            {!(classrooms.length < 10) && (
                                <PaginationCf
                                    dataLength={classrooms.length}
                                    tableSize={10}
                                />
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Tables;
