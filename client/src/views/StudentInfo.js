import React from "react";

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
import { Link } from "react-router-dom";

function StudentInfo() {
    return (
        <Card className="card-user">
            <CardBody>
                <CardText />
                <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                            alt="..."
                            className="avatar"
                            src={require("assets/img/emilyz.jpg")}
                        />
                        <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                </div>
                <div className="card-description text-center">
                    Vui lòng bổ sung đầy đủ thông tin cá nhân....
                    <i className="fas fa-hand-point-right"></i>
                    <Link to="/home/school/profile">
                        <i
                            className="fas fa-edit"
                            style={{
                                fontSize: "30px",
                                cursor: "pointer",
                                marginLeft: "7px",
                            }}
                        ></i>
                    </Link>
                </div>
            </CardBody>
            <CardFooter>
                <div
                    className="button-container"
                    style={{ display: "flex", justifyContent: "center" }}
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
    );
}

export default StudentInfo;
