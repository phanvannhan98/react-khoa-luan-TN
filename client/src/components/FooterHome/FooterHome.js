import React from "react";

function FooterHome() {
    return (
        <footer className="footer-section bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>About OneSchool</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Porro consectetur ut hic ipsum et veritatis
                            corrupti. Itaque eius soluta optio dolorum
                            temporibus in, atque, quos fugit sunt sit quaerat
                            dicta.
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Nesciunt incidunt iure iusto architecto?
                            Numquam, natus?
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
    );
}

export default FooterHome;
