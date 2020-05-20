import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Subject from "components/Subject/Subject";

function Courses() {
    const subject = useSelector((state) => state.subject);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const showCarousel = () => {
        const carouselItem = (arr, isActive) => (
            <div
                key={arr[0]._id}
                className={!isActive ? "carousel-item" : "carousel-item active"}
            >
                {arr.map((value) => (
                    <Subject key={value._id} value={value} />
                ))}
            </div>
        );

        const result = [];
        const itemLength = Math.ceil(subject.length / 3);
        for (var i = 0; i < itemLength; i++) {
            result.push(
                carouselItem(subject.slice(3 * i, 3 * (i + 1)), i === 0)
            );
        }
        return result;
    };

    return (
        <>
            <div className="site-section courses-title" id="courses-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div
                            className="col-lg-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay
                        >
                            <h2 className="section-title">Courses</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="site-section courses-entry-wrap"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="container">
                    <div className="row">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                {showCarousel()}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-7 text-center">
                            <button
                                className="customPrevBtn btn btn-primary m-1"
                                href="#carouselExampleIndicators"
                                data-slide="prev"
                            >
                                Prev
                            </button>
                            <button
                                className="customNextBtn btn btn-primary m-1"
                                href="#carouselExampleIndicators"
                                data-slide="next"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;
