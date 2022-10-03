import React from "react";


export default function Footer() {
    const domain = window.location.host;
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="text-center p-3 bg-dark text-light">

            <div className="container fs-4 p-1">
                <a className="link-info" href="https://www.twitter.com"><i className=" m-1 bi bi-twitter"></i></a>
                <a className="link-info" href="https://www.facebook.com"><i className="m-1 bi bi-facebook"></i></a>
                <a className="link-info" href="https://www.youtube"><i className="m-1 bi bi-youtube"></i></a>
                <a className="link-info" href="https://www.github.com"><i className="m-1 bi bi-github"></i></a>
                <a className="link-info" href="https://www.linkedin.com"><i className="m-1 bi bi-linkedin"></i></a>

            </div>

            <div >© {getCurrentYear()} <a className="link-info" href="/">{domain}</a>. All rights reserved.</div>
            <div className="fw-light">Made by George Khananaev - <a className="link-info" href="https://github.com/Fixitpanda/biz-ad-board">GitHub</a></div>


        </footer>
    );
}

