import React, {useEffect} from 'react'
import Form from './Form'
import NotesViewer from './NotesViewer'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom';
import Alert from './Alert';

export default function Home(){
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('authToken')===null){
            navigate("/")
        }
        // eslint-disable-next-line
    }, [])
     
    return (
        <>
            <Navbar/>
            <Alert/>
            <div className="container my-3">
                <h4>Hello, Submit your Notes Here !</h4>
                <Form/>
                <h4>Your Notes !</h4>
                <NotesViewer/> 
            </div>
        </>
    )
}
