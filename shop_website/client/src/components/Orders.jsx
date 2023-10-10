import React, {useEffect, useState, useContext} from 'react'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom';
import { deleteoder, fetchorder } from '../api/Order_calls';
import EmptyMessage from './EmptyMessage';
import OrderDetails from './OrderDetails';
import Alert from './Alert';
import AlertContext from '../context/alert/AlertContext';

export default function Orders() {
    const b = useContext(AlertContext);

    const [orders, setorders] = useState([])
    const navigate = useNavigate();
    
    const cancelorder=async(id)=>{
        await deleteoder(localStorage.getItem("email"), id)
        let response = await fetchorder(localStorage.getItem("email"));      
        setorders(response);
        b.updateval("Order Deleted Successfully !", 'danger');
    }

    useEffect(() => {
        if(localStorage.getItem("email")===null){
            navigate('/')
        }else{
            const getdata=async()=>{
                let response = await fetchorder(localStorage.getItem("email"));
                setorders(response);
            }
            getdata();
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Navbar/>
            <Alert/>
            <div className="container my-3">
                <div className="row">
                    {orders.length!==0?orders.map((element, index)=>{
                        return <div className="col" key={index}>
                            <OrderDetails id={element._id} name={element.name} img_url={element.img_url} price={element.price} quantity={element.quantity} address={element.address} cancelorder={cancelorder}/>
                        </div>
                    }):<EmptyMessage/>}
                </div>
            </div>
        </>
    )
}
