import React from "react";
import { Link } from "react-router-dom";

function SubSubjectItem(props) {
    const { _id, name, description, image, lessonNum, price, level } =
        props.value || {};
    console.log(props.location);
    return (
        <div className="course  bg-white h-100 align-self-stretch">
            <figure className="m-0">
                {!props.location.pathname.includes("studying") && _id ? (
                    <Link to={`/courses/studying/${_id}`}>
                        <img
                            src={image || "/images/backagain.png"}
                            alt={description}
                            className="img-fluid"
                        />
                    </Link>
                ) : (
                    <div>
                        <img
                            src={image || "/images/backagain.png"}
                            alt={description}
                            className="img-fluid"
                        />
                    </div>
                )}
            </figure>
            <div className="course-inner-text py-4 px-4">
                <span className="course-price">${price || 0}</span>
                <span
                    className="course-price"
                    style={{
                        left: 0,
                        right: "unset",
                        background: "#923939",
                    }}
                >
                    level {level}
                </span>
                <div className="meta">
                    <span className="icon-clock-o" />
                    {lessonNum || 0} Lessons / {lessonNum * 2 || 0} Week
                </div>
                <h3>
                    <a href="/">{name}</a>
                </h3>
                <p>
                    {description || "Hiện tại chưa có bài học trong khoá này"}
                </p>
            </div>
            <div className="d-flex border-top stats">
                <div className="py-3 px-4">
                    <span className="icon-users" /> 2,193 students
                </div>
                <div className="py-3 px-4 w-25 ml-auto border-left">
                    <span className="icon-chat" /> 2
                </div>
            </div>
        </div>
    );
}

export default SubSubjectItem;
