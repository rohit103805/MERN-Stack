import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const logoutUser=()=>{
        localStorage.removeItem("authToken");
        localStorage.removeItem("name");
        navigate('/');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                        </ul>
                        <label className='text'>👤 <strong>{localStorage.getItem("name")}</strong></label>
                        <button type="button" className="btn btn-dark btn-sm mx-2" onClick={logoutUser}>📴</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
