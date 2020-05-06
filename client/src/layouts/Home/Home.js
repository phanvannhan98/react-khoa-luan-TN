import React, { useCallback } from "react";
import Login from "../../views/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SignUp from "views/SignUp";
import LoaddingBar from "../../components/LoaddingBar/LoaddingBar";
import * as actions from "../../actions/actions";
import "assets/css/aos.css";
import "assets/css/style.css";
import "assets/scss/home.scss";
import HeaderNav from "components/HeaderNav/HeaderNav";
import Courses from "components/Courses/Courses";
import StudentInfo from "views/StudentInfo";
import EditStundentInfo from "views/EditStundentInfo";

function Home(props) {
    const isLoadding = useSelector((state) => state.loadding);
    const dispatch = useDispatch();

    const setLoadding = useCallback(
        (data) => dispatch(actions.actSetLoadding(data)),
        [dispatch]
    );

    const isSchool = props.location.pathname.includes("school");
    const isProfile = props.location.pathname.includes("profile");
    return (
        <div className="site-wrap">
            {isLoadding <= 100 && (
                <LoaddingBar progress={isLoadding} setLoadding={setLoadding} />
            )}
            <HeaderNav />

            <div className="intro-section" id="home-section">
                <div
                    className="slide-1"
                    style={{ backgroundImage: 'url("/images/hero_1.jpg")' }}
                    data-stellar-background-ratio="0.5"
                >
                    <div className="container">
                        <div
                            className="row align-items-center"
                            style={isSchool ? { minHeight: "900px" } : {}}
                        >
                            <div className="col-12">
                                <div className="row align-items-center">
                                    {!isProfile ? (
                                        <>
                                            {" "}
                                            <div className="col-lg-6 mb-4">
                                                <h1
                                                    data-aos="fade-up"
                                                    data-aos-delay={100}
                                                >
                                                    Learn From The Expert
                                                </h1>
                                                <p
                                                    className="mb-4"
                                                    data-aos="fade-up"
                                                    data-aos-delay={200}
                                                >
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Maxime ipsa nulla sed
                                                    quis rerum amet natus quas
                                                    necessitatibus.
                                                </p>
                                                <p
                                                    data-aos="fade-up"
                                                    data-aos-delay={300}
                                                >
                                                    <a
                                                        href="/"
                                                        className="btn btn-primary py-3 px-5 btn-pill"
                                                    >
                                                        Admission Now
                                                    </a>
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-5 ml-auto"
                                                data-aos="fade-up"
                                                data-aos-delay={500}
                                            >
                                                <Switch>
                                                    <Route
                                                        path="/home/login"
                                                        component={Login}
                                                    />
                                                    <Route
                                                        path="/home/signup"
                                                        component={SignUp}
                                                    />
                                                    <Route
                                                        path="/home/school"
                                                        component={StudentInfo}
                                                    />
                                                    {/* <Route
                                                path="/home/school"
                                                component={() => (
                                                    <>
                                                        <div>
                                                            <div>
                                                                <button
                                                                    className="btn btn-success"
                                                                    style={{
                                                                        borderRadius:
                                                                            "50%",
                                                                        width:
                                                                            "170px",
                                                                        height:
                                                                            "170px",
                                                                        marginRight:
                                                                            "10px",
                                                                    }}
                                                                >
                                                                    NEWBIE
                                                                </button>
                                                                <button
                                                                    className="btn btn-primary"
                                                                    style={{
                                                                        borderRadius:
                                                                            "50%",
                                                                        width:
                                                                            "170px",
                                                                        height:
                                                                            "170px",
                                                                    }}
                                                                >
                                                                    PRO
                                                                </button>
                                                            </div>
                                                            <label
                                                                className="h6 mt-3 text-uppercase text-light text-center"
                                                                style={{
                                                                    width:
                                                                        "340px",
                                                                }}
                                                            >
                                                                Select your
                                                                level
                                                            </label>
                                                        </div>
                                                    </>
                                                )}
                                            /> */}
                                                    <Redirect
                                                        from="/"
                                                        to="/home/login"
                                                    />
                                                </Switch>
                                            </div>
                                        </>
                                    ) : (
                                        <EditStundentInfo />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {!isSchool ? (
                <>
                    <Courses />
                    <div className="site-section" id="programs-section">
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div
                                    className="col-lg-7 text-center"
                                    data-aos="fade-up"
                                    data-aos-delay
                                >
                                    <h2 className="section-title">
                                        Our Programs
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Magnam repellat aut
                                        neque! Doloribus sunt non aut
                                        reiciendis, vel recusandae obcaecati hic
                                        dicta repudiandae in quas quibusdam
                                        ullam, illum sed veniam!
                                    </p>
                                </div>
                            </div>
                            <div className="row mb-5 align-items-center">
                                <div
                                    className="col-lg-7 mb-5"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <img
                                        src="/images/undraw_youtube_tutorial.svg"
                                        alt="Imagex"
                                        className="img-fluid"
                                    />
                                </div>
                                <div
                                    className="col-lg-4 ml-auto"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <h2 className="text-black mb-4">
                                        We Are Excellent In Education
                                    </h2>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Rem maxime nam porro
                                        possimus fugiat quo molestiae illo.
                                    </p>
                                    <div className="d-flex align-items-center custom-icon-wrap mb-3">
                                        <span className="custom-icon-inner mr-3">
                                            <span className="icon tim-icons icon-single-02" />
                                        </span>
                                        <div>
                                            <h3 className="m-0">
                                                22,931 Yearly Graduates
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center custom-icon-wrap">
                                        <span className="custom-icon-inner mr-3">
                                            <span className="icon tim-icons icon-bank" />
                                        </span>
                                        <div>
                                            <h3 className="m-0">
                                                150 Universities Worldwide
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5 align-items-center">
                                <div
                                    className="col-lg-7 mb-5 order-1 order-lg-2"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <img
                                        src="/images/undraw_teaching.svg"
                                        alt="Imagex"
                                        className="img-fluid"
                                    />
                                </div>
                                <div
                                    className="col-lg-4 mr-auto order-2 order-lg-1"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <h2 className="text-black mb-4">
                                        Strive for Excellent
                                    </h2>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Rem maxime nam porro
                                        possimus fugiat quo molestiae illo.
                                    </p>
                                    <div className="d-flex align-items-center custom-icon-wrap mb-3">
                                        <span className="custom-icon-inner mr-3">
                                            <span className="icon tim-icons icon-single-02" />
                                        </span>
                                        <div>
                                            <h3 className="m-0">
                                                22,931 Yearly Graduates
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center custom-icon-wrap">
                                        <span className="custom-icon-inner mr-3">
                                            <span className="icon tim-icons icon-bank" />
                                        </span>
                                        <div>
                                            <h3 className="m-0">
                                                150 Universities Worldwide
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5 align-items-center">
                                <div
                                    className="col-lg-7 mb-5"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <img
                                        src="/images/undraw_teacher.svg"
                                        alt="Imagex"
                                        className="img-fluid"
                                    />
                                </div>
                                <div
                                    className="col-lg-4 ml-auto"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <h2 className="text-black mb-4">
                                        Education is life
                                    </h2>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Rem maxime nam porro
                                        possimus fugiat quo molestiae illo.
                                    </p>
                                    <div className="d-flex align-items-center custom-icon-wrap mb-3">
                                        <span className="custom-icon-inner mr-3">
                                            <span className="icon tim-icons icon-single-02" />
                                        </span>
                                        <div>
                                            <h3 className="m-0">
                                                22,931 Yearly Graduates
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center custom-icon-wrap">
                                        <span className="custom-icon-inner mr-3">
                                            <span className="icon tim-icons icon-bank" />
                                        </span>
                                        <div>
                                            <h3 className="m-0">
                                                150 Universities Worldwide
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section" id="teachers-section">
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div
                                    className="col-lg-7 mb-5 text-center"
                                    data-aos="fade-up"
                                    data-aos-delay
                                >
                                    <h2 className="section-title">
                                        Our Teachers
                                    </h2>
                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Magnam repellat aut
                                        neque! Doloribus sunt non aut
                                        reiciendis, vel recusandae obcaecati hic
                                        dicta repudiandae in quas quibusdam
                                        ullam, illum sed veniam!
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div
                                    className="col-md-6 col-lg-4 mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <div className="teacher text-center">
                                        <img
                                            src="/images/person_1.jpg"
                                            alt="Imagex"
                                            className="img-fluid w-50 rounded-circle mx-auto mb-4"
                                        />
                                        <div className="py-2">
                                            <h3 className="text-black">
                                                Benjamin Stone
                                            </h3>
                                            <p className="position">
                                                Physics Teacher
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Porro eius suscipit delectus
                                                enim iusto tempora, adipisci at
                                                provident.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div className="teacher text-center">
                                        <img
                                            src="/images/person_2.jpg"
                                            alt="Imagex"
                                            className="img-fluid w-50 rounded-circle mx-auto mb-4"
                                        />
                                        <div className="py-2">
                                            <h3 className="text-black">
                                                Katleen Stone
                                            </h3>
                                            <p className="position">
                                                Physics Teacher
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Porro eius suscipit delectus
                                                enim iusto tempora, adipisci at
                                                provident.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <div className="teacher text-center">
                                        <img
                                            src="/images/person_3.jpg"
                                            alt="Imagex"
                                            className="img-fluid w-50 rounded-circle mx-auto mb-4"
                                        />
                                        <div className="py-2">
                                            <h3 className="text-black">
                                                Sadie White
                                            </h3>
                                            <p className="position">
                                                Physics Teacher
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Porro eius suscipit delectus
                                                enim iusto tempora, adipisci at
                                                provident.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="site-section bg-image overlay"
                        style={{ backgroundImage: 'url("/images/hero_1.jpg")' }}
                    >
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-8 text-center testimony">
                                    <img
                                        src="/images/person_4.jpg"
                                        alt="Imagex"
                                        className="img-fluid w-25 mb-4 rounded-circle"
                                    />
                                    <h3 className="mb-4">Jerome Jensen</h3>
                                    <blockquote>
                                        <p>
                                            “ Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Rerum
                                            rem soluta sit eius necessitatibus
                                            voluptate excepturi beatae ad
                                            eveniet sapiente impedit quae modi
                                            quo provident odit molestias! Rem
                                            reprehenderit assumenda ”
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section pb-0">
                        <div className="future-blobs">
                            <div className="blob_2">
                                <img src="/images/blob_2.svg" alt="Imagex" />
                            </div>
                            <div className="blob_1">
                                <img src="/images/blob_1.svg" alt="Imagex" />
                            </div>
                        </div>
                        <div className="container">
                            <div
                                className="row mb-5 justify-content-center"
                                data-aos="fade-up"
                                data-aos-delay
                            >
                                <div className="col-lg-7 text-center">
                                    <h2 className="section-title">
                                        Why Choose Us
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div
                                    className="col-lg-4 ml-auto align-self-start"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <div className="p-4 rounded bg-white why-choose-us-box">
                                        <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                            <div className="mr-3">
                                                <span className="custom-icon-inner">
                                                    <span className="icon tim-icons icon-single-02" />
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="m-0">
                                                    22,931 Yearly Graduates
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                            <div className="mr-3">
                                                <span className="custom-icon-inner">
                                                    <span className="icon tim-icons icon-bank" />
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="m-0">
                                                    150 Universities Worldwide
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                            <div className="mr-3">
                                                <span className="custom-icon-inner">
                                                    <span className="icon tim-icons icon-single-02" />
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="m-0">
                                                    Top Professionals in The
                                                    World
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                            <div className="mr-3">
                                                <span className="custom-icon-inner">
                                                    <span className="icon tim-icons icon-bank" />
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="m-0">
                                                    Expand Your Knowledge
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                            <div className="mr-3">
                                                <span className="custom-icon-inner">
                                                    <span className="icon tim-icons icon-single-02" />
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="m-0">
                                                    Best Online Teaching
                                                    Assistant Courses
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center custom-icon-wrap custom-icon-light">
                                            <div className="mr-3">
                                                <span className="custom-icon-inner">
                                                    <span className="icon tim-icons icon-bank" />
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="m-0">
                                                    Best Teachers
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-7 align-self-end"
                                    data-aos="fade-left"
                                    data-aos-delay={200}
                                >
                                    <img
                                        src="/images/person_transparent.png"
                                        alt="Imagex"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section bg-light" id="contact-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <h2 className="section-title mb-3">
                                        Message Us
                                    </h2>
                                    <p className="mb-5">
                                        Natus totam voluptatibus animi
                                        aspernatur ducimus quas obcaecati
                                        mollitia quibusdam temporibus culpa
                                        dolore molestias blanditiis consequuntur
                                        sunt nisi.
                                    </p>
                                    <form method="post" data-aos="fade">
                                        <div className="form-group row">
                                            <div className="col-md-6 mb-3 mb-lg-0">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First name"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <textarea
                                                    className="form-control"
                                                    cols={30}
                                                    rows={10}
                                                    placeholder="Write your message here."
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary py-3 px-5 btn-block btn-pill"
                                                    value="Send Message"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}

            <footer className="footer-section bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>About OneSchool</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Porro consectetur ut hic ipsum
                                et veritatis corrupti. Itaque eius soluta optio
                                dolorum temporibus in, atque, quos fugit sunt
                                sit quaerat dicta.
                            </p>
                        </div>
                        <div className="col-md-3 ml-auto">
                            <h3>Links</h3>
                            <ul className="list-unstyled footer-links">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">Courses</a>
                                </li>
                                <li>
                                    <a href="/">Programs</a>
                                </li>
                                <li>
                                    <a href="/">Teachers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Subscribe</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nesciunt incidunt iure iusto
                                architecto? Numquam, natus?
                            </p>
                            <form action="#" className="footer-subscribe">
                                <div className="d-flex mb-5">
                                    <input
                                        type="text"
                                        className="form-control rounded-0"
                                        placeholder="Email"
                                        style={{ height: "43px" }}
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-primary rounded-0"
                                        value="Subscribe"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row pt-5 text-center">
                        <div className="col-md-12">
                            <div className="border-top pt-5">
                                <p>
                                    Copyright © 2020 All rights reserved | This
                                    template is made with&nbsp;
                                    <i
                                        className="tim-icons icon-shape-star"
                                        aria-hidden="true"
                                    />
                                    &nbsp;by&nbsp;
                                    <a href="https://colorlib.com">Colorlib</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
