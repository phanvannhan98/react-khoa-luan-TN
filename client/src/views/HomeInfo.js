import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "components/Login/Login";
import SignUp from "components/SignUp/SignUp";
import Courses from "components/Courses/Courses";
function HomeInfo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="intro-section" id="home-section">
                <div
                    className="slide-1"
                    style={{ backgroundImage: 'url("/images/hero_1.jpg")' }}
                    data-stellar-background-ratio="0.5"
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="row align-items-center">
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
                                                consectetur adipisicing elit.
                                                Maxime ipsa nulla sed quis rerum
                                                amet natus quas necessitatibus.
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
                                                <Redirect
                                                    from="/"
                                                    to="/home/login"
                                                />
                                            </Switch>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Courses />
            <div className="site-section" id="programs-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div
                            className="col-lg-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay
                        >
                            <h2 className="section-title">Our Programs</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Magnam repellat aut neque!
                                Doloribus sunt non aut reiciendis, vel
                                recusandae obcaecati hic dicta repudiandae in
                                quas quibusdam ullam, illum sed veniam!
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
                                adipisicing elit. Rem maxime nam porro possimus
                                fugiat quo molestiae illo.
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
                                adipisicing elit. Rem maxime nam porro possimus
                                fugiat quo molestiae illo.
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
                                adipisicing elit. Rem maxime nam porro possimus
                                fugiat quo molestiae illo.
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
                            <h2 className="section-title">Our Teachers</h2>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Magnam repellat aut neque!
                                Doloribus sunt non aut reiciendis, vel
                                recusandae obcaecati hic dicta repudiandae in
                                quas quibusdam ullam, illum sed veniam!
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
                                    <p className="position">Physics Teacher</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Porro eius suscipit
                                        delectus enim iusto tempora, adipisci at
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
                                    <p className="position">Physics Teacher</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Porro eius suscipit
                                        delectus enim iusto tempora, adipisci at
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
                                    <h3 className="text-black">Sadie White</h3>
                                    <p className="position">Physics Teacher</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Porro eius suscipit
                                        delectus enim iusto tempora, adipisci at
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
                                    “ Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Rerum rem soluta sit eius
                                    necessitatibus voluptate excepturi beatae ad
                                    eveniet sapiente impedit quae modi quo
                                    provident odit molestias! Rem reprehenderit
                                    assumenda ”
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
                            <h2 className="section-title">Why Choose Us</h2>
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
                                            Top Professionals in The World
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
                                            Best Online Teaching Assistant
                                            Courses
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
                                        <h3 className="m-0">Best Teachers</h3>
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
                            <h2 className="section-title mb-3">Message Us</h2>
                            <p className="mb-5">
                                Natus totam voluptatibus animi aspernatur
                                ducimus quas obcaecati mollitia quibusdam
                                temporibus culpa dolore molestias blanditiis
                                consequuntur sunt nisi.
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
    );
}

export default HomeInfo;
