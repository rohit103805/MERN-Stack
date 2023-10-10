import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {auth, googleprovider, githubprovider} from '../config/firebase-config';
import {signInWithRedirect, getRedirectResult} from 'firebase/auth'

export default function LoginChooser(){
    const navigate = useNavigate();

    const googlesignin=async()=>{
        try{
            signInWithRedirect(auth, googleprovider);
        }catch(e){
            console.log(e);
        }
    }

    const githubsignin=async()=>{
        try{
            signInWithRedirect(auth, githubprovider);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        const funcy=async()=>{
            if(localStorage.getItem("email")!==null){
                navigate("/home");
            }else{
                const response = await getRedirectResult(auth)
                if(response!==null){
                    console.log(response.user.email);
                    localStorage.setItem("email", response.user.email)
                    navigate("/home")
                }
            }
        }
        funcy();
        // eslint-disable-next-line 
    }, [])
    
    return (
        <>
            <div className="container my-5">
                <div className="col">
                    <h1 className='text-center'>Welcome to our Shopping App !</h1>
                    <h6 className='text-center'>Explore a world of possibilities</h6>
                    <div className="row justify-content-center my-4">
                        <img className="img1" alt="..." src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" style={{height: '200px', width: '220px'}}/>
                    </div>
                    <hr style={{width: '30%',marginLeft: '35%'}}/>
                    <h5 className='text-center'>Login with</h5>
                    <div className="row justify-content-center my-3">
                        <div className="text-center" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group me-2 mx-3" role="group" aria-label="First Group">
                                <button type="button" className="btn btn-dark" onClick={googlesignin}>
                                    <img className="img1 mx-2" alt="..." src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" style={{height: '27px', width: '27px'}}/>
                                    Login with Google
                                </button>
                            </div>
                            <div className="btn-group me-2" role="group" aria-label="Second Group">
                                <button  type="button" className="btn btn-dark" onClick={githubsignin}>
                                    <img className="img1 mx-2" alt="..." src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" style={{height: '27px', width: '27px'}}/>
                                    Login with Github
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}
