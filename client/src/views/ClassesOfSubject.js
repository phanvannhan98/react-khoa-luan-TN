import React from "react";
import { useSelector } from "react-redux";
import ClassRoomItem from "components/ClassRooms/ClassRoomItem";
import { Link } from "react-router-dom";

function ClassesOfSubject(props) {
    const arrImg = [1, 2, 3, 4, 5, 6];
    const classrooms = useSelector((state) => state.classroom);
    const subSubjects = useSelector((state) => state.subSubject);
    let { time, id } = props.match.params;
    const subSubject = subSubjects.find((v) => v._id === id);
    time = time
        .trim()
        .split(",")
        .map((v) => +v);
    const buoi = ["Sáng", "Chiều", "Tối"];
    const thu = ["Thứ 2, 4, 6", "Thứ 3, 5, 7"];

    const classroomsFilter = classrooms.filter(
        (v) =>
            v.time[0] === time[0] &&
            v.time[1] === time[1] &&
            v.subSubject === id
    );

    const showCarousel = () => {
        let count = 0;
        const carouselItem = (arr, isActive) => (
            <div
                key={arr[0]._id}
                className={!isActive ? "carousel-item" : "carousel-item active"}
            >
                {arr.map((value, i) => (
                    <ClassRoomItem
                        key={value._id}
                        value={value}
                        {...props}
                        img={arrImg[count++ % 6]}
                    />
                ))}
            </div>
        );

        const result = [];
        const itemLength = Math.ceil(classroomsFilter.length / 3);
        for (var i = 0; i < itemLength; i++) {
            result.push(
                carouselItem(
                    classroomsFilter.slice(3 * i, 3 * (i + 1)),
                    i === 0
                )
            );
        }
        if (classroomsFilter.length === 0) {
            result.push(
                <div key={0} className={"carousel-item active"}>
                    <ClassRoomItem key={0} value={{}} {...props} img={""} />
                </div>
            );
        }
        return result;
    };

    return (
        <div className="site-section pb-0">
            <div className="future-blobs">
                <div
                    className="blob_2"
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "390px",
                        background: "#486572",
                        zIndex: 10,
                    }}
                ></div>
                <div className="blob_2">
                    <img src="/images/blob_2.svg" alt="Imagex" />
                </div>
                <div className="blob_1" style={{ bottom: 0, top: "unset" }}>
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
                        <h2
                            className="section-title"
                            style={{ color: "#fff", marginTop: "40px" }}
                        >
                            Lớp {subSubject && subSubject.name}
                        </h2>
                        <h3
                            className="section-title"
                            style={{ fontSize: "1.4rem", color: "#fff" }}
                        >
                            {buoi[+time[0] - 1]} - {thu[+time[1] - 1]}
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-md-12 m-auto"
                        data-aos="fade-up"
                        data-aos-delay={100}
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div
                                    id="carouselExampleIndicators"
                                    className="carousel slide"
                                    data-ride="carousel"
                                    style={{ paddingTop: 0 }}
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
                            <div className="text-center">
                                <Link
                                    to={`/courses/studying/${id}`}
                                    className="btn btn-primary m-1"
                                >
                                    Quay lại
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClassesOfSubject;
