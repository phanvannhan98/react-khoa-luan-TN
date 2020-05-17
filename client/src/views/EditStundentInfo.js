import React, { useEffect, useState } from "react";
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

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DatePickerMaterial from "../components/DatePickerMaterial/DatePickerMaterial";

function EditStundentInfo(props) {
    const [aboutme, setAboutme] = useState(
        "Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is.."
    );
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                                                        console.log("oke");
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
                                                                        defaultValue="Phan Văn Nhân"
                                                                        placeholder="Username"
                                                                        type="text"
                                                                        required
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
                                                                        defaultValue="197433681"
                                                                        placeholder="Số CMND"
                                                                        type="number"
                                                                        min="0"
                                                                        required
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
                                                                        defaultValue="1"
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
                                                                    <DatePickerMaterial />
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
                                                                        placeholder="mike@email.com"
                                                                        type="email"
                                                                        required
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
                                                                        placeholder="Số điện thoại"
                                                                        type="number"
                                                                        min="0"
                                                                        required
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
                                                                        defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                                        placeholder="Home Address"
                                                                        type="text"
                                                                        required
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
                                                                            setAboutme(
                                                                                e
                                                                                    .target
                                                                                    .value
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
