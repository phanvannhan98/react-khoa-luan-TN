import React from "react";

function Subject(props) {
    const { name, description, image, numberOflevel, price } = props.value;
    return (
        <div className="course  bg-white h-100 align-self-stretch">
            <figure className="m-0">
                <a href="course-single.html">
                    <img src={image} alt={description} className="img-fluid" />
                </a>
            </figure>
            <div className="course-inner-text py-4 px-4">
                <span className="course-price">${price}</span>
                <div className="meta">
                    <span className="icon-clock-o" />
                    {numberOflevel} Level / {numberOflevel * 2} Month
                </div>
                <h3>
                    <a href="/">{name}</a>
                </h3>
                <p>{description}</p>
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

export default Subject;
