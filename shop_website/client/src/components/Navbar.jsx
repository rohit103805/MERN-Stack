import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../config/firebase-config';
import {signOut} from 'firebase/auth';

export default function Navbar(){
    const navigate = useNavigate();
    const logoutUser=async()=>{
        await signOut(auth)
        localStorage.removeItem("email")
        navigate("/")
    }
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><strong>Shopify</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/shoes">Shoes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/clothes">Clothes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/mobiles">Mobiles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/orders">Orders</Link>
                            </li>
                        </ul>
                        <label className='text'>👤 <strong>{localStorage.getItem("email")}</strong></label>
                        <button type="button" className="btn btn-dark btn-sm mx-2" onClick={logoutUser}>📴</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
