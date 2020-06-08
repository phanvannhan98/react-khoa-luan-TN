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

const ManagerClRoom = (props) => {
    const dispatch = useDispatch();

    const idClassroom = props.match.params.id;
    const classrooms = useSelector((state) => state.classroom);
    const subjects = useSelector((state) => state.subject);
    const subSubjects = useSelector((state) => state.subSubject);

    const teachers = useSelector((state) => state.teacher);

    const classroomCurrent =
        classrooms.find((v) => v._id === idClassroom) || {};

    const [classroomData, setClassroomData] = useState({
        name: "",
        room: "H201",
        numOfStudents: 50,
        startDay: new Date(),
        time: [1, 1],
        subject: "",
        subSubject: "",
        teacher: "",
        assistant: "",
    });

    const subSubjectBySubject = subSubjects.filter(
        (v) => v.subjectType === classroomData.subject
    );

    const {
        name,
        room,
        numOfStudents,
        startDay,
        time,
        subject,
        subSubject,
        teacher,
        assistant,
    } = classroomData;

    useEffect(() => {
        classroomCurrent._id && setClassroomData(classroomCurrent);
    }, [classroomCurrent]);

    useEffect(() => {
        const teacherTemp = teachers.filter((v) => v.subject === subject);
        if (teacherTemp.length === 0 && !idClassroom) {
            setClassroomData((state) => {
                return {
                    ...state,
                    teacher: "",
                    assistant: "",
                };
            });
        }

        !idClassroom &&
            teachers.length &&
            teacherTemp.length &&
            setClassroomData((state) => {
                return {
                    ...state,
                    teacher: teacherTemp.find((v) => !v.isAssistant)._id,
                    assistant: teacherTemp.find((v) => v.isAssistant)._id,
                };
            });

        const subTemp = subSubjects.filter((v) => v.subjectType === subject);
        setClassroomData((state) => {
            return {
                ...state,
                subSubject: subTemp.length ? subTemp[0]._id : "",
            };
        });
    }, [teachers, subject, subSubjects, idClassroom]);

    useEffect(() => {
        if (!idClassroom && subjects.length && subSubjects.length) {
            const subTemp = subSubjects.filter(
                (v) => v.subjectType === subjects[0]._id
            );

            setClassroomData((state) => {
                return {
                    ...state,
                    subject: subjects[0]._id,
                    subSubject: subTemp.length ? subTemp[0]._id : "-1",
                };
            });
        }
    }, [subjects, subSubjects, idClassroom]);

    const notify = (isAdd, isErr) => {
        !isErr
            ? toast.success(
                  `​​‍ ‍✔ ${isAdd ? "Thêm thành công!" : "Update thành công!"}`,
                  {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                  }
              )
            : toast.error(`​​‍ ‍✘ Vui lòng kiểm tra lại!`, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
              });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        for (let data in classroomData) {
            if (
                classroomData[data] === "" ||
                !classroomData.teacher ||
                !classroomData.assistant
            ) {
                notify(!idClassroom, true);
                return;
            }
        }

        if (idClassroom) {
            await dispatch(
                actions.actUpdateClassroomInfoRequest(classroomData)
            );
        } else {
            await dispatch(actions.actAddNewClassroomRequest(classroomData));
        }

        notify(!idClassroom);
    };

    const onDelete = async () => {
        goToTablesPage();
        await dispatch(actions.actDeleteClassroomRequest(idClassroom));
    };

    const goToTablesPage = () => props.history.push("/admin/tables");

    if (idClassroom && !classroomCurrent._id) goToTablesPage();

    const teacherOfSubject = teachers.filter((v) => v.subject === subject);

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
                                    {idClassroom
                                        ? "EDIT CLASS ROOM INFO"
                                        : "ADD NEW ClASS ROOM"}
                                </h5>
                            </CardHeader>

                            <CardBody>
                                <Row>
                                    <Col className="pr-md-1" md="5">
                                        <FormGroup>
                                            <label>Tên Lớp Học</label>
                                            <Input
                                                value={name}
                                                placeholder="Tên Lớp Học"
                                                type="text"
                                                required
                                                onChange={(e) => {
                                                    setClassroomData({
                                                        ...classroomData,
                                                        name: e.target.value,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-md-1" md="4">
                                        <FormGroup>
                                            <label>Phòng học</label>
                                            <Input
                                                value={room || ""}
                                                placeholder="Phòng học"
                                                type="text"
                                                min="0"
                                                required
                                                onChange={(e) => {
                                                    setClassroomData({
                                                        ...classroomData,
                                                        room: e.target.value,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col className="pl-md-1" md="3">
                                        <FormGroup>
                                            <label>Số lượng Học Viên</label>
                                            <Input
                                                value={numOfStudents || ""}
                                                placeholder="Số lượng"
                                                type="number"
                                                min="0"
                                                required
                                                onChange={(e) => {
                                                    setClassroomData({
                                                        ...classroomData,
                                                        numOfStudents:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-md-1" md="4">
                                        <FormGroup>
                                            <label>Ngày bắt đầu</label>
                                            <DatePickerMaterial
                                                ngaysinh={startDay}
                                                setNgaysinh={(data) => {
                                                    setClassroomData({
                                                        ...classroomData,
                                                        startDay: data,
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-md-1" md="4">
                                        <FormGroup>
                                            <label>Buổi</label>
                                            <Select
                                                id="demo-simple-select"
                                                value={(time && time[0]) || "1"}
                                                className="form-control"
                                                onChange={(e) => {
                                                    setClassroomData({
                                                        ...classroomData,
                                                        time: [
                                                            e.target.value,
                                                            time[1],
                                                        ],
                                                    });
                                                }}
                                            >
                                                <MenuItem value={1}>
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
                                                <MenuItem value={2}>
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
                                                <MenuItem value={3}>
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
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="4">
                                        <FormGroup>
                                            <label>Thứ</label>
                                            <Select
                                                id="demo-simple-select"
                                                value={(time && time[1]) || "1"}
                                                className="form-control"
                                                onChange={(e) => {
                                                    setClassroomData({
                                                        ...classroomData,
                                                        time: [
                                                            time[0],
                                                            e.target.value,
                                                        ],
                                                    });
                                                }}
                                            >
                                                <MenuItem value={1}>
                                                    <span
                                                        style={{
                                                            textIndent: "10px",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        Thứ 2 - 4 - 6
                                                    </span>
                                                </MenuItem>
                                                <MenuItem value={2}>
                                                    <span
                                                        style={{
                                                            textIndent: "10px",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        Thứ 3 - 5 - 7
                                                    </span>
                                                </MenuItem>
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <label>Khoá Học</label>
                                            {(subjects.length && (
                                                <Select
                                                    value={
                                                        subject ||
                                                        subjects[0]._id
                                                    }
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setClassroomData({
                                                            ...classroomData,
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
                                            )) || (
                                                <Select
                                                    value={"1"}
                                                    className="form-control"
                                                >
                                                    <MenuItem value="1">
                                                        Tiếng Anh
                                                    </MenuItem>
                                                </Select>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="6">
                                        <FormGroup>
                                            <label>Môn Học</label>
                                            {(subSubjectBySubject.length && (
                                                <Select
                                                    value={subSubject}
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setClassroomData({
                                                            ...classroomData,
                                                            subSubject:
                                                                e.target.value,
                                                        });
                                                    }}
                                                >
                                                    {subSubjectBySubject.map(
                                                        (v) => (
                                                            <MenuItem
                                                                key={v._id}
                                                                value={v._id}
                                                            >
                                                                {v.name}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            )) || (
                                                <Select
                                                    value={"-1"}
                                                    className="form-control"
                                                >
                                                    <MenuItem value="-1">
                                                        Hiện tại không có môn
                                                        học nào
                                                    </MenuItem>
                                                </Select>
                                            )}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <label>Giáo Viên</label>
                                            {(teacherOfSubject.filter(
                                                (v) => !v.isAssistant
                                            ).length && (
                                                <Select
                                                    value={teacher || "-1"}
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setClassroomData({
                                                            ...classroomData,
                                                            teacher:
                                                                e.target.value,
                                                        });
                                                    }}
                                                >
                                                    {teachers
                                                        .filter(
                                                            (v) =>
                                                                !v.isAssistant &&
                                                                v.subject ===
                                                                    subject
                                                        )
                                                        .map((v) => (
                                                            <MenuItem
                                                                key={v._id}
                                                                value={v._id}
                                                            >
                                                                {v.name}
                                                            </MenuItem>
                                                        ))}
                                                    {teacher || (
                                                        <MenuItem
                                                            value={"-1"}
                                                        ></MenuItem>
                                                    )}
                                                </Select>
                                            )) || (
                                                <Select
                                                    value={"1"}
                                                    className="form-control"
                                                >
                                                    <MenuItem value="1">
                                                        Hiện tại không có giáo
                                                        viên nào
                                                    </MenuItem>
                                                </Select>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="6">
                                        <FormGroup>
                                            <label>Trợ giảng</label>
                                            {(teacherOfSubject.filter(
                                                (v) => v.isAssistant
                                            ).length && (
                                                <Select
                                                    value={assistant || "-1"}
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setClassroomData({
                                                            ...classroomData,
                                                            assistant:
                                                                e.target.value,
                                                        });
                                                    }}
                                                >
                                                    {teacherOfSubject
                                                        .filter(
                                                            (v) => v.isAssistant
                                                        )
                                                        .map((v) => (
                                                            <MenuItem
                                                                key={v._id}
                                                                value={v._id}
                                                            >
                                                                {v.name}
                                                            </MenuItem>
                                                        ))}
                                                    {assistant || (
                                                        <MenuItem
                                                            value={"-1"}
                                                        ></MenuItem>
                                                    )}
                                                </Select>
                                            )) || (
                                                <Select
                                                    value={"-1"}
                                                    className="form-control"
                                                >
                                                    <MenuItem value="-1">
                                                        Hiện tại không có trợ
                                                        giảng nào
                                                    </MenuItem>
                                                </Select>
                                            )}
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
                                    {idClassroom ? "Save" : "Add"}
                                </Button>
                                {idClassroom && (
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
                                    onClick={goToTablesPage}
                                >
                                    Go Back
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
                                            src={require("assets/img/classroom.jpg")}
                                        />
                                        <h5 className="title">Class 3H</h5>
                                    </a>
                                    <p className="description">
                                        English B1 - Class room
                                    </p>
                                </div>
                                <div className="card-description">
                                    Trợ giảng <br />
                                    Phan Văn Nhân
                                    <br />
                                    <br />
                                    Giáo viên <br />
                                    Mike
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

export default ManagerClRoom;
