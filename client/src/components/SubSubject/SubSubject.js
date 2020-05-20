import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SubSubjectItem from "./SubSubjectItem";

function SubSubject(props) {
    console.log(props.location);
    const subSubjects = useSelector((state) => state.subSubject);
    const subject = useSelector((state) => state.subject);
    const id = props.match.params.id;
    const sb = subSubjects.filter((v) => v.subjectType === id);
    const subjectType = subject.length && subject.find((v) => v._id === id);
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
                    <SubSubjectItem key={value._id} value={value} {...props} />
                ))}
            </div>
        );

        const result = [];
        const itemLength = Math.ceil(sb.length / 3);
        for (var i = 0; i < itemLength; i++) {
            result.push(carouselItem(sb.slice(3 * i, 3 * (i + 1)), i === 0));
        }

        return result.length ? (
            result
        ) : (
            <SubSubjectItem value={{}} {...props} />
        );
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
                            <h3
                                className="section-title"
                                style={{ fontSize: "1.4rem" }}
                            >
                                Khoá Học {subjectType && subjectType.name}
                            </h3>
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
                    <div
                        className="row"
                        style={{ justifyContent: "space-around" }}
                    >
                        {showCarousel()}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Link
                        to="/courses"
                        className="btn btn-primary mt-3 text-center"
                    >
                        Quay lại
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SubSubject;
