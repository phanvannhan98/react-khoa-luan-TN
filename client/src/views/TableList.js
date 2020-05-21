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

const Tables = (props) => {
    const teacher = useSelector((state) => state.teacher);
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
            </tr>
        ));

    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">QUẢN LÝ GIÁO VIÊN</CardTitle>
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
                            <CardTitle tag="h4">
                                Table on Plain Background
                            </CardTitle>
                            <p className="category">
                                Here is a subtitle for this table
                            </p>
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
                                    </tr>
                                </thead>
                                <tbody>{showTableData()}</tbody>
                            </Table>
                            <PaginationCf dataLength={32} tableSize={10} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Tables;
