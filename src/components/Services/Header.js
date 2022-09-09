import { useState } from "react";

function Header(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    function handleBtnClick(e) {
        // forms
        e.preventDefault();

        props.addUser({
            name: name,
            email: email,
            status: status
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex">
                    <a className="navbar-brand" href="#">Users</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input value={name} onChange={(e) => setName(e.target.value)} className="form-control me-2" type="text" placeholder="Name" aria-label="Name" />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control me-2" type="text" placeholder="Email" aria-label="Email" />

                            <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select me-2">
                                <option>active</option>
                                <option>expired</option>
                                <option>banned</option>
                            </select>

                            <button onClick={(e) => handleBtnClick(e)} className="btn btn-outline-success" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;