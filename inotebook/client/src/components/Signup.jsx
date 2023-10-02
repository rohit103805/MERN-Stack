import React, {useState, useEffect, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { registerUser } from '../api/User_calls';
import AlertContext from '../context/alert/AlertContext';
import Alert from './Alert';

export default function Signup() {
    const navigate = useNavigate();
    const b = useContext(AlertContext);
    const [registeremail, setregisteremail] = useState("")
    const [registerpassword, setregisterpassword] = useState("")
    const [name, setname] = useState("")
    const getemail = (event)=>{
        setregisteremail(event.target.value)
    }
    const getpassword = (event)=>{
        setregisterpassword(event.target.value)
    }
    const getname = (event)=>{
        setname(event.target.value)
    }
    const register=async()=>{
        try{
            const authToken = await registerUser(name, registeremail, registerpassword);
            if(authToken.authToken!==undefined){
                localStorage.setItem('authToken', authToken.authToken);
                localStorage.setItem('name', authToken.name);
                navigate("/home");
            }
            else {
                b.updateval("This email already exists !", 'danger')
                setname("");
                setregisteremail("");
                setregisterpassword("");
            }
        }catch(e){

        }
    }
    useEffect(()=>{
        if(localStorage.getItem('authToken')!==null){
            navigate("/home")
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Alert/>
            <div className="container my-5">
                <div className="col">
                    <h1 className='text-center'>Register Form</h1>
                    <div className="row justify-content-center my-4">
                        <img className="img1" alt="..." src="https://cdn-icons-png.flaticon.com/512/295/295128.png" style={{height: '200px', width: '220px'}}/>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="mb-3 row justify-content-center">
                            <strong htmlFor="Name of the User" className="col-sm-1 col-form-label">Name</strong>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="inputname" placeholder="Your Full Name" onChange={getname} value={name}/>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center">
                            <strong htmlFor="inputEmail" className="col-sm-1 col-form-label">Email</strong>
                            <div className="col-sm-8">
                                <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" onChange={getemail} value={registeremail}/>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center">
                            <strong htmlFor="inputPassword" className="col-sm-1 col-form-label" >Password</strong>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="inputPassword" placeholder="password@123" onChange={getpassword} value={registerpassword}/>
                                <div id="passwordHelpBlock" className="form-text">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className="text-center" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group me-2 my-1 text-center" role="group" aria-label="First group">
                                    <button disabled={name.length===0 || registeremail.length===0 || registerpassword.length<=7?true:false} type="button" className="btn btn-dark" onClick={register}>Register</button>
                                </div>
                                <div className="btn-group me-2 my-1 text-center" role="group" aria-label="Second group">
                                    <Link type="button" className="btn btn-info" to="/">Login</Link>
                                </div>
                            </div>
    	                </div>
                    </div>
                </div>
            </div>
        </>
    )
}
