import React, {useEffect} from 'react'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom';
import Carousal from './Carousal';

export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("email")===null){
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
            <Navbar/>
            <Carousal/>
        </>
    )
}
