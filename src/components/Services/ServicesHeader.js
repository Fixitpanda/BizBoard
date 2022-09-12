import { useState } from "react";

function ServicesHeader(props) {
    const [status, setStatus] = useState('');
    const [selectService, setServiceNameSelection] = useState('');

    function handleBtnClick(e) {
        // forms
        e.preventDefault();

        props.addUser({
            selectService: selectService,
            status: status
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="navbar-brand">Service Name</div>
                 
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">

                            <select value={selectService} onChange={(e) => setServiceNameSelection(e.target.value)} className="form-select me-2">
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                                <option>Four</option>
                                <option>Five</option>
                            </select>

                            <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select me-2">
                                <option>Active</option>
                                <option>Pause</option>
                                <option>Stop</option>
                            </select>

                            <button onClick={(e) => handleBtnClick(e)} className="btn btn-outline-success" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default ServicesHeader;