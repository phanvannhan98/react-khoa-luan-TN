import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DatePickerMaterial from "components/DatePickerMaterial/DatePickerMaterial";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as actions from "../actions/actions";

const EditTeacherInfo = (props) => {
    const idTeacher = props.match.params.id;
    const teachers = useSelector((state) => state.teacher);
    const subjects = useSelector((state) => state.subject);
    const teacherCurrent = teachers.find((v) => v._id === idTeacher) || {};

    const [teacherData, setTeacherData] = useState({
        name: "",
        ngaysinh: new Date("08-10-1998"),
        soCmnd: "",
        gioitinh: 1,
        email: "",
        sdt: "",
        isAssistant: "false",
        subject: "",
    });

    const {
        name,
        ngaysinh,
        soCmnd,
        gioitinh,
        email,
        sdt,
        isAssistant,
        subject,
    } = teacherData;
    const dispatch = useDispatch();

    useEffect(() => {
        teacherCurrent._id && setTeacherData(teacherCurrent);
    }, [teacherCurrent]);

    useEffect(() => {
        !idTeacher &&
            subjects.length &&
            setTeacherData((state) => {
                return { ...state, subject: subjects[0]._id };
            });
    }, [subjects, idTeacher]);

    const notify = () =>
        toast.success("​​‍ ‍✔ Updated!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const onSubmit = async (e) => {
        e.preventDefault();
        const teacherData = {
            name,
            ngaysinh,
            soCmnd,
            gioitinh,
            email,
            sdt,
            isAssistant,
            subject,
        };
        if (idTeacher) {
            teacherData._id = idTeacher;
            await dispatch(actions.actUpdateTeacherInfoRequest(teacherData));
        } else {
            await dispatch(actions.actAddNewTeacherRequest(teacherData));
        }

        notify();
    };

    const onDelete = async () => {
        console.log(idTeacher);
        await dispatch(actions.actDeleteTeacherRequest(idTeacher));
    };

    return (
        <div className="content">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">
                                    {idTeacher
                                        ? "EDIT TEACHER INFO"
                                        : "ADD NEW TEACHER"}
                                </h5>
                            </CardHeader>

                            <CardBody>
                                <Row>
                                    <Col className="pr-md-1" md="5">
                                        <FormGroup>
                                            <label>Họ và Tên</label>
                                            <Input
                                                value={name}
                                                placeholder="Username"
                                                type="text"
                                                required
                                                onChange={(e) => {
                                                    setTeacherData({
                                                        ...teacherData,
                                                        name: e.target.value,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-md-1" md="4">
                                        <FormGroup>
                                            <label>Số CMND</label>
                                            <Input
                                                value={soCmnd || ""}
                                                placeholder="Số CMND"
                                                type="number"
                                                min="0"
                                                required
                                                onChange={(e) => {
                                                    setTeacherData({
                                                        ...teacherData,
                                                        soCmnd: e.target.value,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col className="pl-md-1" md="3">
                                        <FormGroup>
                                            <label>Giới tính</label>
                                            <Select
                                                id="demo-simple-select"
                                                value={
                                                    gioitinh === "true"
                                                        ? "1"
                                                        : gioitinh === "false"
                                                        ? "-1"
                                                        : gioitinh || "1"
                                                }
                                                className="form-control"
                                                onChange={(e) => {
                                                    setTeacherData({
                                                        ...teacherData,
                                                        gioitinh:
                                                            e.target.value,
                                                    });
                                                }}
                                            >
                                                <MenuItem value="1">
                                                    Nam
                                                </MenuItem>
                                                <MenuItem value="-1">
                                                    Nữ
                                                </MenuItem>
                                                <MenuItem value="0">
                                                    Khác
                                                </MenuItem>
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-md-1" md="4">
                                        <FormGroup>
                                            <label>Ngày sinh</label>
                                            <DatePickerMaterial
                                                ngaysinh={ngaysinh}
                                                setNgaysinh={(data) => {
                                                    setTeacherData({
                                                        ...teacherData,
                                                        ngaysinh: data,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-md-1" md="4">
                                        <FormGroup>
                                            <label htmlFor="exampleInputEmail1">
                                                Email address
                                            </label>
                                            <Input
                                                value={email}
                                                placeholder="mike@email.com"
                                                type="email"
                                                required
                                                onChange={(e) => {
                                                    setTeacherData({
                                                        ...teacherData,
                                                        email: e.target.value,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="4">
                                        <FormGroup>
                                            <label>Số điện thoại</label>
                                            <Input
                                                value={sdt}
                                                placeholder="Số điện thoại"
                                                type="number"
                                                min="0"
                                                required
                                                onChange={(e) => {
                                                    setTeacherData({
                                                        ...teacherData,
                                                        sdt: e.target.value,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="8">
                                        <FormGroup>
                                            <label>Giảng Dạy</label>
                                            {subjects.length && (
                                                <Select
                                                    value={
                                                        subject ||
                                                        subjects[0]._id
                                                    }
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setTeacherData({
                                                            ...teacherData,
                                                            subject:
                                                                e.target.value,
                                                        });
                                                    }}
                                                >
                                                    {subjects.map((v) => (
                                                        <MenuItem
                                                            key={v._id}
                                                            value={v._id}
                                                        >
                                                            {v.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="4">
                                        <FormGroup>
                                            <label>Vai trò</label>
                                            <Select
                                                id="demo-simple-select"
                                                value={isAssistant}
                                                className="form-control"
                                                onChange={(e) => {
                                                    setTeacherData({
                                                        ...teacherData,
                                                        isAssistant:
                                                            e.target.value,
                                                    });
                                                }}
                                            >
                                                <MenuItem value="false">
                                                    Giáo Viên
                                                </MenuItem>
                                                <MenuItem value="true">
                                                    Trợ Giảng
                                                </MenuItem>
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    className="btn-fill"
                                    color="success"
                                    type="submit"
                                    onClick={onSubmit}
                                >
                                    {idTeacher ? "Save" : "Add"}
                                </Button>
                                {idTeacher && (
                                    <Button
                                        className="btn-fill"
                                        color="danger"
                                        onClick={onDelete}
                                    >
                                        Delete
                                    </Button>
                                )}
                                <Button
                                    className="btn-fill"
                                    color="primary"
                                    onClick={() =>
                                        props.history.push("/admin/tables")
                                    }
                                >
                                    Cancel
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-user">
                            <CardBody>
                                <CardText />
                                <div className="author">
                                    <div className="block block-one" />
                                    <div className="block block-two" />
                                    <div className="block block-three" />
                                    <div className="block block-four" />
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/emilyz.jpg")}
                                        />
                                        <h5 className="title">Mike Andrew</h5>
                                    </a>
                                    <p className="description">
                                        Ceo/Co-Founder
                                    </p>
                                </div>
                                <div className="card-description">
                                    Do not be scared of the truth because we
                                    need to restart the human foundation in
                                    truth And I love you like Kanye loves Kanye
                                    I love Rick Owens’ bed design but the back
                                    is...
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="button-container">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="facebook"
                                    >
                                        <i className="fab fa-facebook" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="twitter"
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="google"
                                    >
                                        <i className="fab fa-google-plus" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default EditTeacherInfo;
