import React from "react";

function Error404() {
    return (
        <div className="text-center my-5 py-5">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"><span className="text-danger">Opps!</span> Page not found.</p>
            <p className="lead">
                The page you’re looking for doesnt exist.
            </p>
        </div>
    );
}


export default Error404;