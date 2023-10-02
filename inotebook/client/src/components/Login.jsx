import React, {useState, useEffect, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { loginUser } from '../api/User_calls';
import AlertContext from '../context/alert/AlertContext';
import Alert from './Alert';

export default function Login() {
    const b = useContext(AlertContext);
    const navigate = useNavigate();
    const [loginemail, setloginemail] = useState("")
    const [loginpassword, setloginpassword] = useState("")
    const getemail = (event)=>{
        setloginemail(event.target.value)
    }
    const getpassword = (event)=>{
        setloginpassword(event.target.value)
    }
    const login=async()=>{
        try{
            const authToken = await loginUser(loginemail, loginpassword);
            if(authToken.authToken!==undefined){
                localStorage.setItem('authToken', authToken.authToken);
                localStorage.setItem('name', authToken.name);
                navigate("/home");
            }
            else {
                b.updateval("Wrong Credentials, Sorry ! ❌", 'danger');
                setloginemail("");
                setloginpassword("");
            }
        }catch(e){
            b.updateval("Couldn't Login, Try Again ! ❌", 'danger');
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
                    <h1 className='text-center'>Login Form</h1>
                    <div className="row justify-content-center my-4">
                        <img className="img1" alt="..." src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" style={{height: '200px', width: '220px'}}/>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="mb-3 row justify-content-center">
                            <strong htmlFor="inputEmail" className="col-sm-1 col-form-label">Email</strong>
                            <div className="col-sm-8">
                                <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" onChange={getemail} value={loginemail}/>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center">
                            <strong htmlFor="inputPassword" className="col-sm-1 col-form-label" >Password</strong>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="inputPassword" placeholder="password@123" onChange={getpassword} value={loginpassword}/>
                            </div>
                        </div>
                        <div className="text-center" role="toolbar" aria-label="Toolbar with button groups">
                            <div id="passwordHelpBlock" className="form-text text-center">New User? Register now.</div>
                            <div className="btn-group me-2 my-2 text-center" role="group" aria-label="First group">
                                <button disabled={loginemail.length===0 || loginpassword.length===0?true:false} type="button" className="btn btn-primary" onClick={login}>Login</button>
                            </div>
                            <div className="btn-group me-2 my-2 text-center" role="group" aria-label="Second group">
                                <Link type="button" className="btn btn-info" to="/signup">SignUp</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
