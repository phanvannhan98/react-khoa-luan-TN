import React, { useEffect, useState, useCallback } from "react";
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

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DatePickerMaterial from "../components/DatePickerMaterial/DatePickerMaterial";
import CallApi from "../utils/apiCaller";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/actions";

function EditStundentInfo(props) {
    const [userData, setUserData] = useState({
        name: "Phan Văn Nhân",
        ngaysinh: new Date("08-10-1998"),
        soCmnd: "197433681",
        gioitinh: 1,
        email: "phanvannhan004@gmail.com",
        sdt: "0979542273",
        diachi: "5/9/19 Đặng Văn Ngữ, TP Huế",
        aboutme:
            "Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..",
    });

    const {
        name,
        ngaysinh,
        soCmnd,
        gioitinh,
        email,
        sdt,
        diachi,
        aboutme,
    } = userData;

    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userInfo);
    const setLoadding = useCallback(
        (data) => dispatch(actions.actSetLoadding(data)),
        [dispatch]
    );
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        userInfo.name && setUserData(userInfo);
    }, [userInfo]);

    return (
        <div className="intro-section1" id="home-section">
            <div
                className="slide-1"
                style={{ backgroundImage: 'url("/images/hero_1.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="row align-items-center">
                                <div
                                    className="content"
                                    style={{ paddingTop: "200px" }}
                                >
                                    <Row>
                                        <Col
                                            md="8"
                                            data-aos="fade-up"
                                            data-aos-delay={100}
                                        >
                                            <Card>
                                                <Form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <CardHeader>
                                                        <h5 className="title">
                                                            Edit Profile
                                                        </h5>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Row>
                                                            <Col
                                                                className="pr-md-1"
                                                                md="5"
                                                            >
                                                                <FormGroup>
                                                                    <label>
                                                                        Họ và
                                                                        Tên
                                                                    </label>
                                                                    <Input
                                                                        value={
                                                                            name
                                                                        }
                                                                        placeholder="Username"
                                                                        type="text"
                                                                        required
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setUserData(
                                                                                {
                                                                                    ...userData,
                                                                                    name:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            );
                                                                        }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col
                                                                className="px-md-1"
                                                                md="4"
                                                            >
                                                                <FormGroup>
                                                                    <label>
                                                                        Số CMND
                                                                    </label>
                                                                    <Input
                                                                        value={
                                                                            soCmnd
                                                                        }
                                                                        placeholder="Số CMND"
                                                                        type="number"
                                                                        min="0"
                                                                        required
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setUserData(
                                                                                {
                                                                                    ...userData,
                                                                                    soCmnd:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            );
                                                                        }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>

                                                            <Col
                                                                className="pl-md-1"
                                                                md="3"
                                                            >
                                                                <FormGroup>
                                                                    <label>
                                                                        Giới
                                                                        tính
                                                                    </label>
                                                                    <Select
                                                                        id="demo-simple-select"
                                                                        value={
                                                                            gioitinh
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setUserData(
                                                                                {
                                                                                    ...userData,
                                                                                    gioitinh:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            )
                                                                        }
                                                                        className="form-control"
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
                                                            <Col
                                                                className="pr-md-1"
                                                                md="4"
                                                            >
                                                                <FormGroup>
                                                                    <label>
                                                                        Ngày
                                                                        sinh
                                                                    </label>
                                                                    <DatePickerMaterial
                                                                        ngaysinh={
                                                                            ngaysinh
                                                                        }
                                                                        setNgaysinh={(
                                                                            data
                                                                        ) =>
                                                                            setUserData(
                                                                                {
                                                                                    ...userData,
                                                                                    ngaysinh: data,
                                                                                }
                                                                            )
                                                                        }
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col
                                                                className="px-md-1"
                                                                md="4"
                                                            >
                                                                <FormGroup>
                                                                    <label htmlFor="exampleInputEmail1">
                                                                        Email
                                                                        address
                                                                    </label>
                                                                    <Input
                                                                        value={
                                                                            email
                                                                        }
                                                                        placeholder="mike@email.com"
                                                                        type="email"
                                                                        required
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setUserData(
                                                                                {
                                                                                    ...userData,
                                                                                    email:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            );
                                                                        }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col
                                                                className="pl-md-1"
                                                                md="4"
                                                            >
                                                                <FormGroup>
                                                                    <label>
                                                                        Số điện
                                                                        thoại
                                                                    </label>
                                                                    <Input
                                                                        value={
                                                                            sdt
                                                                        }
                                                                        placeholder="Số điện thoại"
                                                                        type="number"
                                                                        min="0"
                                                                        required
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setUserData(
                                                                                {
                                                                                    ...userData,
                                                                                    sdt:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            );
                                                                        }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="12">
                                                                <FormGroup>
                                                                    <label>
                                                                        Address
                                                                    </label>
                                                                    <Input
                                                                        value={
                                                                            diachi
                                                                        }
                                                                        placeholder="Home Address"
                                                                        type="text"
                                                                        required
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setUserData(
                                                                                {
                                                                                    ...userData,
                                                                                    diachi:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            );
                                                                        }}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md="8">
                                                                <FormGroup>
                                                                    <label>
                                                                        About Me
                                                                    </label>
                                                                    <Input
                                                                        cols="80"
                                                                        placeholder="Here can be your description"
                                                                        rows="4"
                                                                        value={
                                                                            aboutme
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setUserData(
                                                                                {
                                                                                    ...userData,
                                                                                    aboutme:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            )
                                                                        }
                                                                        type="textarea"
                                                                        maxLength="500"
                                                                        id="about-me"
                                                                        required
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                    <CardFooter>
                                                        <Button
                                                            className="btn-fill"
                                                            color="primary"
                                                            type="submit"
                                                            onClick={() => {
                                                                // props.history.push(
                                                                //     "/student-info"
                                                                // );
                                                                setLoadding(1);
                                                                const userData = {
                                                                    name,
                                                                    ngaysinh,
                                                                    soCmnd,
                                                                    email,
                                                                    sdt,
                                                                    gioitinh,
                                                                    diachi,
                                                                    aboutme,
                                                                };

                                                                CallApi(
                                                                    "/api/login/edit-user-info",
                                                                    "POST",
                                                                    userData
                                                                ).then(
                                                                    (res) => {
                                                                        setLoadding(
                                                                            100
                                                                        );
                                                                    }
                                                                );
                                                            }}
                                                        >
                                                            Save
                                                        </Button>
                                                    </CardFooter>
                                                </Form>
                                            </Card>
                                        </Col>
                                        <Col
                                            md="4"
                                            data-aos="fade-up"
                                            data-aos-delay={300}
                                        >
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
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="avatar"
                                                                src={require("assets/img/emilyz.jpg")}
                                                            />
                                                            <h5 className="title">
                                                                Mike Andrew
                                                            </h5>
                                                        </a>
                                                        <p className="description">
                                                            Ceo/Co-Founder
                                                        </p>
                                                    </div>
                                                    <div className="card-description">
                                                        {/* Do not be scared of the
                                                        truth because we need to
                                                        restart the human
                                                        foundation in truth And
                                                        I love you like Kanye
                                                        loves Kanye I love Rick
                                                        Owens’ bed design but
                                                        the back is... */}
                                                        {aboutme}
                                                    </div>
                                                </CardBody>
                                                <CardFooter>
                                                    <div
                                                        className="button-container"
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <Button
                                                            className="btn-icon btn-round user-info-btn"
                                                            color="facebook"
                                                        >
                                                            <i className="fab fa-facebook" />
                                                        </Button>
                                                        <Button
                                                            className="btn-icon btn-round user-info-btn"
                                                            color="twitter"
                                                        >
                                                            <i className="fab fa-twitter" />
                                                        </Button>
                                                        <Button
                                                            className="btn-icon btn-round user-info-btn"
                                                            color="google"
                                                        >
                                                            <i className="fab fa-google-plus" />
                                                        </Button>
                                                    </div>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditStundentInfo;
